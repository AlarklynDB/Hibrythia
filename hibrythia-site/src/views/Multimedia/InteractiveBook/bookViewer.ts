/**
 * 3D interactive model of "Hibryds — A Grand Voyage" (Book 1 of The Hibrythian
 * Saga). Ported from a self-contained Three.js prototype into a reusable,
 * framework-agnostic module that a React component can mount/unmount.
 *
 * Behavior (drag to orbit, middle/shift-drag to pan, scroll to zoom, edition
 * switching, camera view presets, environment/lighting toggles) mirrors the
 * original prototype. Cover art is loaded from real texture files instead of
 * inline base64 strings.
 */
import * as THREE from "three";

export type EditionName = "paperback" | "hardcover";
export type ViewName = "front" | "spine" | "back" | "head" | "three" | "foot";

export const EDITION_INFO: Record<EditionName, { title: string; spec: string }> = {
  paperback: {
    title: "Hibryds — A Grand Voyage",
    spec: "Paperback · 540 pages · 5.5 × 8.5 in · 1.277 in spine",
  },
  hardcover: {
    title: "Hibryds — A Grand Voyage | Casewrap",
    spec: "Hardcover · 540 pages · 5.5 × 8.5 in trim · 1.5 in spine · 0.125 in square",
  },
};

export interface EditionTextures {
  front: string;
  spine: string;
  back: string;
}

export interface BookViewerTextures {
  paperback: EditionTextures;
  hardcover: EditionTextures;
}

export interface BookViewerCallbacks {
  /** Fired when the user drags the camera, so the UI can clear any "active view" highlight. */
  onUserOrbit?: () => void;
}

export interface BookViewerController {
  setEdition(name: EditionName): void;
  setEnvironment(on: boolean): void;
  setModelLighting(on: boolean): void;
  setBackLight(on: boolean): void;
  goToView(name: ViewName): void;
  resetView(): void;
  dispose(): void;
}

/**
 * Mounts the viewer onto the given canvas/stage. Returns null (and never
 * throws) if WebGL isn't available — the caller should show a fallback UI.
 */
export function mountBookViewer(
  canvas: HTMLCanvasElement,
  stage: HTMLElement,
  textures: BookViewerTextures,
  callbacks: BookViewerCallbacks = {},
): BookViewerController | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return null;
  }
  renderer.setClearColor(0x000000, 0); // truly transparent, not just visually dark
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 900);

  /* ================= shared dimensions, in inches ================= */
  const TRIM_W = 5.5;
  const TRIM_H = 8.5;
  const BLOCK_D = 1.2767; // 540 pages, measured off the paperback wrap
  const PAGES = 540;

  /* ================= texture helpers ================= */
  const loader = new THREE.TextureLoader();
  function art(src: string) {
    const t = loader.load(src);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return t;
  }
  // Same source image, drawn small and blurred, for the floor reflection.
  function softArt(src: string) {
    const tex = new THREE.CanvasTexture(document.createElement("canvas"));
    tex.colorSpace = THREE.SRGBColorSpace;
    const img = new Image();
    img.onload = () => {
      const w = Math.max(24, Math.round(img.width * 0.16));
      const h = Math.max(24, Math.round(img.height * 0.16));
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d")!;
      if (typeof ctx.filter === "string") ctx.filter = "blur(3px)";
      ctx.drawImage(img, 0, 0, w, h);
      tex.image = c;
      tex.needsUpdate = true;
    };
    img.src = src;
    return tex;
  }
  function canvasTex(w: number, h: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    draw(c.getContext("2d")!, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return t;
  }
  // alphaMap reads the GREEN channel, so masks are painted as real greyscale
  // on opaque black rather than white-on-transparent.
  function maskTex(w: number, h: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    draw(ctx, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.NoColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return t;
  }

  function edgeTex(axis: number) {
    return canvasTex(axis ? 64 : 1024, axis ? 1024 : 64, (ctx, w, h) => {
      const span = axis ? h : w;
      ctx.fillStyle = "#EFEADC";
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < PAGES; i++) {
        const p = (i / PAGES) * span;
        ctx.fillStyle = "rgba(120,104,78," + (0.05 + Math.random() * 0.16).toFixed(3) + ")";
        if (axis) ctx.fillRect(0, p, w, 1.1);
        else ctx.fillRect(p, 0, 1.1, h);
      }
      const g = axis ? ctx.createLinearGradient(0, 0, w, 0) : ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "rgba(60,48,30,0.30)");
      g.addColorStop(0.5, "rgba(60,48,30,0)");
      g.addColorStop(1, "rgba(60,48,30,0.30)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    });
  }

  const matEdgeSide = new THREE.MeshStandardMaterial({ map: edgeTex(0), roughness: 0.98, envMapIntensity: 0.12 });
  const matEdgeTop = new THREE.MeshStandardMaterial({ map: edgeTex(1), roughness: 0.98, envMapIntensity: 0.12 });
  const matPaper = new THREE.MeshStandardMaterial({ color: 0xefeadc, roughness: 0.98, envMapIntensity: 0.12 });

  /* ================= shadows and ground ================= */
  function contactShadow(bookW: number, bookD: number, spread: number, opacity: number) {
    const planeW = bookW + spread * 2;
    const planeD = bookD + spread * 2;
    const CW = 512;
    const CH = Math.max(64, Math.round(CW * (planeD / planeW)));
    const ppi = CW / planeW; // square pixels, so the blur stays round

    const tex = maskTex(CW, CH, (ctx, w, h) => {
      const cx = w / 2;
      const cy = h / 2;
      const fw = bookW * ppi;
      const fd = bookD * ppi;
      if (typeof ctx.filter !== "string") {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5);
        g.addColorStop(0, "#ffffff");
        g.addColorStop(0.4, "#5a5a5a");
        g.addColorStop(1, "#000000");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        return;
      }
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = "blur(" + (spread * 0.4 * ppi).toFixed(1) + "px)";
      ctx.fillStyle = "rgb(108,108,108)";
      ctx.fillRect(cx - fw * 0.58, cy - fd * 0.62, fw * 1.16, fd * 1.24);
      ctx.filter = "blur(" + (spread * 0.1 * ppi).toFixed(1) + "px)";
      ctx.fillStyle = "rgb(150,150,150)";
      ctx.fillRect(cx - fw / 2, cy - fd / 2, fw, fd);
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
    });

    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(planeW, planeD),
      new THREE.MeshBasicMaterial({
        transparent: true,
        depthWrite: false,
        color: 0x000000,
        opacity,
        side: THREE.DoubleSide,
      }),
    );
    m.material.alphaMap = tex;
    m.rotation.x = -Math.PI / 2;
    m.position.set(-0.17, 0.004, -0.26); // key light is front-right
    m.renderOrder = 2;
    scene.add(m);
    return m;
  }

  const fade = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0x8e979f, side: THREE.DoubleSide }),
  );
  fade.material.alphaMap = maskTex(512, 512, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.5);
    g.addColorStop(0.0, "rgb(120,120,120)");
    g.addColorStop(0.045, "rgb(196,196,196)");
    g.addColorStop(0.11, "rgb(255,255,255)");
    g.addColorStop(0.48, "rgb(255,255,255)");
    g.addColorStop(1.0, "rgb(0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
  fade.rotation.x = -Math.PI / 2;
  fade.position.y = 0.001;
  fade.renderOrder = 1;
  scene.add(fade);

  /* ================= editions ================= */
  interface EditionBuild {
    group: THREE.Group;
    height: number;
    footprint: [number, number, number];
    mirror: THREE.Group;
    contact: THREE.Mesh;
  }

  function buildPaperback(loadArt: (src: string) => THREE.Texture): Omit<EditionBuild, "mirror" | "contact"> {
    const SPINE = 1.2767;
    const COVER_T = 0.03;
    const TRIM_IN = 0.05;
    const stock = { roughness: 0.52, metalness: 0.04, envMapIntensity: 0.3 };
    const t = textures.paperback;

    const matFront = new THREE.MeshStandardMaterial({ map: loadArt(t.front), ...stock });
    const matSpine = new THREE.MeshStandardMaterial({ map: loadArt(t.spine), ...stock });
    const matBack = new THREE.MeshStandardMaterial({ map: loadArt(t.back), ...stock });
    const matInner = new THREE.MeshStandardMaterial({ color: 0xdfd9cc, roughness: 0.95, envMapIntensity: 0.12 });
    const matBoard = new THREE.MeshStandardMaterial({ color: 0x1a2230, roughness: 0.8, envMapIntensity: 0.22 });

    const g = new THREE.Group();
    g.position.y = TRIM_H / 2;

    const panelW = TRIM_W - COVER_T;
    const panelX = COVER_T / 2;

    // BoxGeometry material order: +X, -X, +Y, -Y, +Z, -Z
    const front = new THREE.Mesh(new THREE.BoxGeometry(panelW, TRIM_H, COVER_T), [
      matBoard,
      matBoard,
      matBoard,
      matBoard,
      matFront,
      matInner,
    ]);
    front.position.set(panelX, 0, SPINE / 2 - COVER_T / 2);
    g.add(front);

    const back = new THREE.Mesh(new THREE.BoxGeometry(panelW, TRIM_H, COVER_T), [
      matBoard,
      matBoard,
      matBoard,
      matBoard,
      matInner,
      matBack,
    ]);
    back.position.set(panelX, 0, -SPINE / 2 + COVER_T / 2);
    g.add(back);

    const spine = new THREE.Mesh(new THREE.BoxGeometry(COVER_T, TRIM_H, SPINE), [
      matInner,
      matSpine,
      matBoard,
      matBoard,
      matBoard,
      matBoard,
    ]);
    spine.position.set(-TRIM_W / 2 + COVER_T / 2, 0, 0);
    g.add(spine);

    const blockW = TRIM_W - COVER_T - TRIM_IN;
    const block = new THREE.Mesh(new THREE.BoxGeometry(blockW, TRIM_H - TRIM_IN * 2, SPINE - COVER_T * 2), [
      matEdgeSide,
      matPaper,
      matEdgeTop,
      matEdgeTop,
      matEdgeSide,
      matEdgeSide,
    ]);
    block.position.set(-TRIM_W / 2 + COVER_T + blockW / 2, 0, 0);
    g.add(block);

    return { group: g, height: TRIM_H, footprint: [TRIM_W + COVER_T, SPINE, 1.7] };
  }

  function buildHardcover(loadArt: (src: string) => THREE.Texture): Omit<EditionBuild, "mirror" | "contact"> {
    const SQUARE = 0.125;
    const BOARD_T = 0.098;
    const CASE_W = TRIM_W + SQUARE; // 5.625
    const CASE_H = TRIM_H + SQUARE * 2; // 8.75
    const CASE_D = 1.5; // spine panel off the casewrap
    const laminate = { roughness: 0.38, metalness: 0.06, envMapIntensity: 0.55 };
    const t = textures.hardcover;

    const matFront = new THREE.MeshStandardMaterial({ map: loadArt(t.front), ...laminate });
    const matSpine = new THREE.MeshStandardMaterial({ map: loadArt(t.spine), ...laminate });
    const matBack = new THREE.MeshStandardMaterial({ map: loadArt(t.back), ...laminate });
    const matTurnIn = new THREE.MeshStandardMaterial({
      color: 0x1b2534,
      roughness: 0.45,
      metalness: 0.05,
      envMapIntensity: 0.45,
    });

    const endpaperTex = canvasTex(256, 400, (ctx, w, h) => {
      const g2 = ctx.createLinearGradient(0, 0, w, h);
      g2.addColorStop(0, "#16202f");
      g2.addColorStop(1, "#0e1622");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 3000; i++) {
        ctx.fillStyle = "rgba(180,200,230," + (Math.random() * 0.05).toFixed(3) + ")";
        ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
      }
    });
    const matEndpaper = new THREE.MeshStandardMaterial({ map: endpaperTex, roughness: 0.95, envMapIntensity: 0.15 });

    const headbandTex = canvasTex(128, 32, (ctx, w, h) => {
      ctx.fillStyle = "#E9E6DF";
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < w; i += 6) {
        ctx.fillStyle = (i / 6) % 2 ? "#c9a84c" : "#8f6f9c";
        ctx.fillRect(i, 0, 3, h);
      }
      const g3 = ctx.createLinearGradient(0, 0, 0, h);
      g3.addColorStop(0, "rgba(0,0,0,0.35)");
      g3.addColorStop(0.45, "rgba(255,255,255,0.25)");
      g3.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);
    });
    headbandTex.wrapS = THREE.RepeatWrapping;
    headbandTex.repeat.x = 6;

    const g = new THREE.Group();
    g.position.y = CASE_H / 2;

    const frontBoard = new THREE.Mesh(new THREE.BoxGeometry(CASE_W, CASE_H, BOARD_T), [
      matTurnIn,
      matTurnIn,
      matTurnIn,
      matTurnIn,
      matFront,
      matEndpaper,
    ]);
    frontBoard.position.set(0, 0, CASE_D / 2 - BOARD_T / 2);
    g.add(frontBoard);

    const backBoard = new THREE.Mesh(new THREE.BoxGeometry(CASE_W, CASE_H, BOARD_T), [
      matTurnIn,
      matTurnIn,
      matTurnIn,
      matTurnIn,
      matEndpaper,
      matBack,
    ]);
    backBoard.position.set(0, 0, -CASE_D / 2 + BOARD_T / 2);
    g.add(backBoard);

    const spineBoard = new THREE.Mesh(new THREE.BoxGeometry(BOARD_T, CASE_H, CASE_D), [
      matTurnIn,
      matSpine,
      matTurnIn,
      matTurnIn,
      matTurnIn,
      matTurnIn,
    ]);
    spineBoard.position.set(-CASE_W / 2 - BOARD_T / 2, 0, 0);
    g.add(spineBoard);

    const block = new THREE.Mesh(new THREE.BoxGeometry(TRIM_W, TRIM_H, BLOCK_D), [
      matEdgeSide,
      matPaper,
      matEdgeTop,
      matEdgeTop,
      matEdgeSide,
      matEdgeSide,
    ]);
    block.position.set(CASE_W / 2 - SQUARE - TRIM_W / 2, 0, 0);
    g.add(block);

    const hbMat = new THREE.MeshStandardMaterial({ map: headbandTex, roughness: 0.85 });
    [1, -1].forEach((s) => {
      const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, BLOCK_D, 14, 1), hbMat);
      hb.rotation.x = Math.PI / 2;
      hb.position.set(-CASE_W / 2 + 0.055, s * (TRIM_H / 2 - 0.03), 0);
      g.add(hb);
    });

    return { group: g, height: CASE_H, footprint: [CASE_W + BOARD_T, CASE_D, 1.9] };
  }

  const buildFns: Record<EditionName, (loadArt: (src: string) => THREE.Texture) => Omit<EditionBuild, "mirror" | "contact">> = {
    paperback: buildPaperback,
    hardcover: buildHardcover,
  };

  const EDITIONS: Record<EditionName, EditionBuild> = {} as Record<EditionName, EditionBuild>;
  (Object.keys(buildFns) as EditionName[]).forEach((k) => {
    const built = buildFns[k](art);
    // Built from the same geometry/code path but with softArt() for the cover
    // faces — a genuinely separate material set, not a shared clone.
    const reflection = buildFns[k](softArt);
    reflection.group.scale.y = -1;
    reflection.group.position.y = -built.height / 2;

    const full: EditionBuild = {
      ...built,
      mirror: reflection.group,
      contact: contactShadow(built.footprint[0], built.footprint[1], built.footprint[2], 0.8),
    };
    scene.add(full.group);
    scene.add(full.mirror);
    EDITIONS[k] = full;
  });

  /* ================= sky =================
     An atmosphere shader rather than a painted panorama: analytic scattering
     for the dome, plus fBm cloud on a projected layer. The same dome is baked
     through PMREM, so whatever the sky is doing is also what lights and
     reflects off the book. */
  const SKY_VERT = `
    varying vec3 vDir;
    void main() {
      vDir = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const SKY_FRAG = `
    precision highp float;
    varying vec3 vDir;
    uniform vec3 uSun, uZenith, uHorizon, uGround, uSunTint, uCloudLit, uCloudDark;
    uniform float uCover, uSoft, uCloudOpacity, uTime;

    float hash(vec2 p){ p = fract(p * vec2(233.34, 851.73)); p += dot(p, p + 23.45); return fract(p.x * p.y); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0, a = 0.5;
      mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      for (int i = 0; i < 6; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
      return v;
    }
    float density(vec2 p){
      float d = fbm(p) * 0.72 + fbm(p * 3.1 + 4.0) * 0.28;
      return smoothstep(uCover, uCover + uSoft, d);
    }

    void main() {
      vec3 d = normalize(vDir);
      vec3 sn = normalize(uSun);
      float h = d.y;
      float mu = dot(d, sn);
      float m = max(mu, 0.0);

      vec3 sky = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.42));
      vec3 below = mix(uGround, uHorizon, smoothstep(-0.40, 0.0, h));
      sky = mix(below, sky, step(0.0, h));

      sky += uSunTint * pow(m, 6.0) * 0.30;
      sky += uSunTint * pow(m, 220.0) * 1.20;
      sky = mix(sky, uSunTint * 2.1, smoothstep(0.99960, 0.99988, mu));

      if (h > 0.012) {
        vec2 p = d.xz * (1.0 / h) * 1.45 + vec2(uTime * 0.0042, uTime * 0.0017);
        float dens = density(p);
        dens *= smoothstep(0.012, 0.26, h);
        vec2 toSun = normalize(sn.xz + vec2(0.0001, 0.0));
        float shade = clamp(density(p + toSun * 0.42) - dens * 0.25, 0.0, 1.0);
        vec3 lit = mix(uCloudLit, uCloudDark, shade * 0.85);
        lit += uSunTint * pow(m, 16.0) * 0.55 * (1.0 - shade);
        sky = mix(sky, lit, dens * uCloudOpacity);
      }

      gl_FragColor = vec4(sky, 1.0);
    }
  `;

  const skyUniforms = {
    uSun: { value: new THREE.Vector3(6, 10, 9).normalize() },
    uZenith: { value: new THREE.Color(0x2c6bd6) },
    uHorizon: { value: new THREE.Color(0xbfd8ee) },
    uGround: { value: new THREE.Color(0x8b939b) },
    uSunTint: { value: new THREE.Color(0xfff3d6) },
    uCloudLit: { value: new THREE.Color(0xffffff) },
    uCloudDark: { value: new THREE.Color(0x94a5bd) },
    uCover: { value: 0.46 },
    uSoft: { value: 0.2 },
    uCloudOpacity: { value: 0.95 },
    uTime: { value: 0.0 },
  };

  const skyMat = new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });

  const skyMesh = new THREE.Mesh(new THREE.SphereGeometry(200, 48, 32), skyMat);
  skyMesh.frustumCulled = false;
  scene.add(skyMesh);

  // a small second dome in its own scene, purely so PMREM has something to bake
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(8, 32, 20), skyMat));

  let envRT: THREE.WebGLRenderTarget | null = null;
  try {
    const pmrem = new THREE.PMREMGenerator(renderer);
    envRT = pmrem.fromScene(envScene, 0, 0.5, 40);
    scene.environment = envRT.texture;
  } catch {
    scene.environment = null; // direct lights still carry the scene
  }

  /* ================= sunlight ================= */
  const sunLight = new THREE.DirectionalLight(0xfff6e4, 2.35);
  sunLight.position.copy(skyUniforms.uSun.value).multiplyScalar(60);
  scene.add(sunLight);

  const hemi = new THREE.HemisphereLight(0xa6c6f0, 0x6e6a62, 0.55);
  scene.add(hemi);

  const skyFill = new THREE.DirectionalLight(0xbbd2f0, 0.28);
  skyFill.position.set(-9, 6, 4);
  scene.add(skyFill);

  // The sun sits at +Z, so the back cover never catches it directly. This
  // roughly mirrors the sun's angle so both covers get comparable light.
  const backLight = new THREE.DirectionalLight(0xbfe8ee, 1.35);
  backLight.position.set(-4, 7, -11);
  scene.add(backLight);

  /* ================= orbit ================= */
  const MIN_R = 8;
  const MAX_R = 52;
  const EYE_FLOOR = 0.25;

  const VIEWS: Record<ViewName, { theta: number; phi: number; r: number }> = {
    front: { theta: 0, phi: 1.5708, r: 24 },
    spine: { theta: -1.5708, phi: 1.5708, r: 20 },
    back: { theta: 3.1416, phi: 1.5708, r: 24 },
    head: { theta: -0.55, phi: 0.42, r: 21 },
    three: { theta: -0.62, phi: 1.3, r: 24 },
    foot: { theta: -0.55, phi: 2.7, r: 21 },
  };

  let focusY = EDITIONS.paperback.height / 2;
  const cur = { theta: -0.62, phi: 1.3, radius: 24 };
  const tgt = { theta: -0.62, phi: 1.3, radius: 24 };
  const focus = new THREE.Vector3(0, focusY, 0);

  let dragging = false;
  let mode: "orbit" | "pan" = "orbit";
  let lastX = 0;
  let lastY = 0;
  const vRight = new THREE.Vector3();
  const vUp = new THREE.Vector3();
  const vDir = new THREE.Vector3();
  let envOn = true;

  function phiCeiling(radius: number) {
    const c = (EYE_FLOOR - focus.y) / radius;
    return Math.acos(Math.max(-1, Math.min(1, c)));
  }
  function clampPhi(p: number, radius: number) {
    // with the ground hidden there is nothing to sink through, so the camera
    // is free to travel right over the top and underneath
    if (!envOn) return Math.max(0.02, Math.min(Math.PI - 0.02, p));
    return Math.max(0.1, Math.min(phiCeiling(radius), p));
  }

  const onContextMenu = (e: Event) => e.preventDefault();
  const onPointerDown = (e: PointerEvent) => {
    mode = e.button === 1 || e.button === 2 || e.shiftKey ? "pan" : "orbit";
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.classList.add(mode === "pan" ? "bk-panning" : "bk-dragging");
    canvas.setPointerCapture(e.pointerId);
    e.preventDefault();
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    if (mode === "pan") {
      const s = cur.radius * 0.0016;
      camera.matrixWorld.extractBasis(vRight, vUp, vDir);
      focus.addScaledVector(vRight, -dx * s);
      focus.addScaledVector(vUp, dy * s);
      focus.x = Math.max(-14, Math.min(14, focus.x));
      focus.y = Math.max(-6, Math.min(TRIM_H * 2.2, focus.y));
      focus.z = Math.max(-14, Math.min(14, focus.z));
    } else {
      tgt.theta -= dx * 0.008;
      tgt.phi = clampPhi(tgt.phi - dy * 0.006, tgt.radius);
      callbacks.onUserOrbit?.();
    }
  };
  const onPointerEnd = () => {
    dragging = false;
    canvas.classList.remove("bk-dragging");
    canvas.classList.remove("bk-panning");
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    tgt.radius = Math.max(MIN_R, Math.min(MAX_R, tgt.radius + e.deltaY * 0.016));
  };

  canvas.addEventListener("contextmenu", onContextMenu);
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerEnd);
  canvas.addEventListener("pointercancel", onPointerEnd);
  canvas.addEventListener("pointerleave", onPointerEnd);
  canvas.addEventListener("wheel", onWheel, { passive: false });

  /* ---- edition switching ---- */
  let current: EditionName = "paperback";

  function refreshVisibility() {
    (Object.keys(EDITIONS) as EditionName[]).forEach((k) => {
      const e = EDITIONS[k];
      const on = k === current;
      e.group.visible = on;
      e.mirror.visible = on && envOn;
      e.contact.visible = on && envOn;
    });
    skyMesh.visible = envOn;
    fade.visible = envOn;
  }

  function setEdition(name: EditionName) {
    current = name;
    const e = EDITIONS[name];
    // the two editions are different heights, so re-aim at the new centre
    // while leaving the angle and distance exactly where the user left them
    focus.y += e.height / 2 - focusY;
    focusY = e.height / 2;
    refreshVisibility();
  }

  /* ---- scene toggles ---- */
  const HEMI_BASE = hemi.intensity;
  const FILL_BASE = skyFill.intensity;

  function setEnvironment(on: boolean) {
    envOn = on;
    refreshVisibility();
    if (on) tgt.phi = clampPhi(tgt.phi, tgt.radius); // ease back above ground
  }
  function setModelLighting(on: boolean) {
    // the baked environment is what gives the cover its sky reflections
    scene.environment = on && envRT ? envRT.texture : null;
    hemi.intensity = on ? HEMI_BASE : 0.1;
    skyFill.intensity = on ? FILL_BASE : 0.1;
  }
  const BACK_BASE = backLight.intensity;
  function setBackLight(on: boolean) {
    backLight.intensity = on ? BACK_BASE : 0;
  }

  function goToView(name: ViewName) {
    const v = VIEWS[name];
    let d = v.theta - tgt.theta;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    tgt.theta += d;
    tgt.radius = v.r;
    tgt.phi = clampPhi(v.phi, v.r);
  }

  function resetView() {
    focus.set(0, focusY, 0);
    tgt.theta = -0.62;
    tgt.phi = clampPhi(1.3, 24);
    tgt.radius = 24;
  }

  setEdition("paperback");

  /* ================= loop ================= */
  const clock = new THREE.Clock();
  let rafId = 0;
  function frame() {
    rafId = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    skyUniforms.uTime.value = clock.elapsedTime;

    tgt.phi = clampPhi(tgt.phi, tgt.radius);

    const k = Math.min(1, dt * 4.5);
    cur.theta += (tgt.theta - cur.theta) * k;
    cur.phi += (tgt.phi - cur.phi) * k;
    cur.radius += (tgt.radius - cur.radius) * k;
    cur.phi = clampPhi(cur.phi, cur.radius);

    camera.position.set(
      focus.x + cur.radius * Math.sin(cur.phi) * Math.sin(cur.theta),
      focus.y + cur.radius * Math.cos(cur.phi),
      focus.z + cur.radius * Math.sin(cur.phi) * Math.cos(cur.theta),
    );
    camera.lookAt(focus);
    renderer.render(scene, camera);
  }

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  resize();
  frame();

  function dispose() {
    cancelAnimationFrame(rafId);
    resizeObserver.disconnect();
    canvas.removeEventListener("contextmenu", onContextMenu);
    canvas.removeEventListener("pointerdown", onPointerDown);
    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerup", onPointerEnd);
    canvas.removeEventListener("pointercancel", onPointerEnd);
    canvas.removeEventListener("pointerleave", onPointerEnd);
    canvas.removeEventListener("wheel", onWheel);
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => {
          if (m instanceof THREE.MeshStandardMaterial && m.map) m.map.dispose();
          m.dispose();
        });
      }
    });
    envRT?.dispose();
    renderer.dispose();
  }

  return { setEdition, setEnvironment, setModelLighting, setBackLight, goToView, resetView, dispose };
}
