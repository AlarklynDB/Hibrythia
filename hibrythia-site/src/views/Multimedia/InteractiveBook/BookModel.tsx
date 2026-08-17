import { useEffect, useRef, useState } from "react";
import {
  mountBookViewer,
  EDITION_INFO,
  type BookViewerController,
  type BookViewerTextures,
  type EditionName,
  type ViewName,
} from "./bookViewer";

// Astro intercepts plain .jpg imports through its image-asset pipeline and
// resolves them to an { src, width, height } object instead of a raw URL
// string (which is what Three.js's TextureLoader needs). Appending `?url`
// forces Vite to hand back the plain hashed URL string instead.
import paperbackFront from "./textures/paperback-front.jpg?url";
import paperbackSpine from "./textures/paperback-spine.jpg?url";
import paperbackBack from "./textures/paperback-back.jpg?url";
import hardcoverFront from "./textures/hardcover-front.jpg?url";
import hardcoverSpine from "./textures/hardcover-spine.jpg?url";
import hardcoverBack from "./textures/hardcover-back.jpg?url";

const TEXTURES: BookViewerTextures = {
  paperback: { front: paperbackFront, spine: paperbackSpine, back: paperbackBack },
  hardcover: { front: hardcoverFront, spine: hardcoverSpine, back: hardcoverBack },
};

const VIEW_BUTTONS: { name: ViewName; label: string }[] = [
  { name: "front", label: "Front" },
  { name: "spine", label: "Spine" },
  { name: "back", label: "Back" },
  { name: "head", label: "Head" },
  { name: "three", label: "3/4" },
  { name: "foot", label: "Foot" },
];

const gridBtn =
  "font-body text-[10px] tracking-[0.14em] uppercase whitespace-nowrap py-2.5 px-1.5 border transition-colors cursor-pointer";
const gridBtnOff = "text-[#f2ebeb] border-[rgba(242,235,235,0.18)] bg-transparent hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.6)]";
const gridBtnOn = "text-[#0e0d0b] border-[#c9a84c] bg-[#c9a84c]";

function Switch({ on }: { on: boolean }) {
  return (
    <span
      className={`relative flex-none w-[34px] h-[18px] mt-0.5 border transition-colors ${
        on ? "bg-[#c9a84c] border-[#c9a84c]" : "border-[rgba(242,235,235,0.28)] bg-transparent"
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-[12px] h-[12px] transition-transform ${
          on ? "translate-x-[16px] bg-[#0e0d0b]" : "translate-x-0 bg-[#f2ebeb]"
        }`}
      />
    </span>
  );
}

function ToggleRow({
  label,
  sub,
  on,
  onClick,
}: {
  label: string;
  sub: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-start gap-3 w-full py-2.5 text-left bg-transparent border-0 cursor-pointer group"
    >
      <span className="flex-1">
        <span className="block font-body text-[11.5px] tracking-wide text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">
          {label}
        </span>
        <span className="block mt-1 font-body text-[9.5px] leading-relaxed text-[#f2ebeb]/45">{sub}</span>
      </span>
      <Switch on={on} />
    </button>
  );
}

export default function BookModel() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const controllerRef = useRef<BookViewerController | null>(null);

  const [ready, setReady] = useState(true);
  const [edition, setEdition] = useState<EditionName>("paperback");
  const [activeView, setActiveView] = useState<ViewName | null>(null);
  const [envOn, setEnvOn] = useState(true);
  const [lightingOn, setLightingOn] = useState(true);
  const [backLightOn, setBackLightOn] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mount the Three.js scene once.
  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const controller = mountBookViewer(canvas, stage, TEXTURES, {
      onUserOrbit: () => setActiveView(null),
    });
    controllerRef.current = controller;
    if (!controller) setReady(false);

    return () => {
      controller?.dispose();
      controllerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => controllerRef.current?.setEdition(edition), [edition]);
  useEffect(() => controllerRef.current?.setEnvironment(envOn), [envOn]);
  useEffect(() => controllerRef.current?.setModelLighting(lightingOn), [lightingOn]);
  useEffect(() => controllerRef.current?.setBackLight(backLightOn), [backLightOn]);

  // Close open popovers on outside click / Escape, matching original UX.
  useEffect(() => {
    if (!infoOpen && !menuOpen) return;
    const closeAll = () => {
      setInfoOpen(false);
      setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("pointerdown", closeAll);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", closeAll);
      document.removeEventListener("keydown", onKey);
    };
  }, [infoOpen, menuOpen]);

  const info = EDITION_INFO[edition];

  const handleView = (name: ViewName) => {
    controllerRef.current?.goToView(name);
    setActiveView(name);
  };
  const handleReset = () => {
    controllerRef.current?.resetView();
    setActiveView(null);
  };

  return (
    <div
      ref={stageRef}
      className="relative w-full max-w-[1040px] mx-auto h-[680px] min-h-[460px] overflow-hidden select-none"
      style={{
        background: envOn
          ? "radial-gradient(130% 100% at 50% 8%, #2a2016 0%, #1c1712 38%, #0e0d0b 100%)"
          : "repeating-conic-gradient(rgba(242,235,235,0.05) 0% 25%, rgba(242,235,235,0.012) 0% 50%) 0 0 / 24px 24px, #0c0a08",
        fontFamily: "'Alegreya Sans', system-ui, sans-serif",
        transition: "background 200ms ease",
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-grab active:cursor-grabbing touch-none"
        style={{ display: ready ? "block" : "none" }}
      />

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center p-7 text-center text-[13px] leading-relaxed text-[#f2ebeb]/70">
          The 3D view could not start — WebGL may be unavailable in this browser.
        </div>
      )}

      {/* title overlay */}
      <div className="absolute top-5 left-[22px] pointer-events-none">
        <div
          className="font-display text-[11px] tracking-[0.32em] uppercase text-[#c9a84c]/90 transition-shadow"
          style={{
            textShadow: envOn ? "0 2px 3px rgba(0,0,0,0.55), 2px 5px 10px rgba(0,0,0,0.40)" : "none",
          }}
        >
          {info.title}
        </div>
      </div>

      {/* info fab + panel */}
      <div className="absolute top-5 right-[22px] z-10">
        <button
          type="button"
          aria-expanded={infoOpen}
          aria-label="Book info and controls"
          onClick={(e) => {
            e.stopPropagation();
            setInfoOpen((v) => !v);
            setMenuOpen(false);
          }}
          className={`w-[26px] h-[26px] rounded-full flex items-center justify-center font-serif italic text-[12px] border transition-colors ${
            infoOpen
              ? "text-[#c9a84c] border-[rgba(201,168,76,0.6)] bg-[rgba(201,168,76,0.1)]"
              : "text-[#f2ebeb] border-[rgba(242,235,235,0.3)] bg-[rgba(242,235,235,0.08)]"
          }`}
        >
          i
        </button>
        <div
          onPointerDown={(e) => e.stopPropagation()}
          className={`absolute top-[34px] right-0 w-[246px] py-[14px] px-[15px] bg-[rgba(14,13,11,0.82)] border border-[rgba(242,235,235,0.14)] backdrop-blur-md transition-all ${
            infoOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1.5 pointer-events-none"
          }`}
        >
          <p className="font-body m-0 mb-[9px] text-[9px] tracking-[0.28em] uppercase text-[#f2ebeb]/40">Specs</p>
          <p className="font-body text-[10.5px] leading-[1.7] tracking-wide text-[#f2ebeb]/60">{info.spec}</p>
          <div className="h-px my-4 bg-[rgba(242,235,235,0.12)]" />
          <p className="font-body m-0 mb-[9px] text-[9px] tracking-[0.28em] uppercase text-[#f2ebeb]/40">Controls</p>
          <ul className="list-none m-0 p-0 space-y-0.5">
            {[
              ["Drag", "to turn"],
              ["Middle-drag", "to pan"],
              ["Scroll", "to zoom"],
            ].map(([b, rest]) => (
              <li key={b} className="font-body text-[10.5px] leading-[1.9] tracking-wide text-[#f2ebeb]/60">
                <b className="text-[#c9a84c] font-semibold opacity-95">{b}</b> {rest}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom-right menu */}
      <div className="absolute right-5 bottom-5 z-10 flex flex-col items-end gap-2.5">
        <div
          onPointerDown={(e) => e.stopPropagation()}
          className={`w-[278px] max-h-[calc(100%-96px)] overflow-y-auto p-[15px] bg-[rgba(14,13,11,0.8)] border border-[rgba(242,235,235,0.14)] backdrop-blur-md transition-all ${
            menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <p className="font-body m-0 mb-[9px] text-[9px] tracking-[0.28em] uppercase text-[#f2ebeb]/40">Edition</p>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => setEdition("paperback")}
              className={`${gridBtn} ${edition === "paperback" ? gridBtnOn : gridBtnOff}`}
            >
              Paperback
            </button>
            <button
              type="button"
              onClick={() => setEdition("hardcover")}
              className={`${gridBtn} ${edition === "hardcover" ? gridBtnOn : gridBtnOff}`}
            >
              Hardcover
            </button>
          </div>

          <div className="h-px my-4 bg-[rgba(242,235,235,0.12)]" />

          <p className="font-body m-0 mb-[9px] text-[9px] tracking-[0.28em] uppercase text-[#f2ebeb]/40">Camera</p>
          <div className="grid grid-cols-3 gap-1.5">
            {VIEW_BUTTONS.map(({ name, label }) => (
              <button
                key={name}
                type="button"
                onClick={() => handleView(name)}
                className={`${gridBtn} ${activeView === name ? gridBtnOn : gridBtnOff}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="block w-full mt-1.5 font-body text-[10px] tracking-[0.14em] uppercase py-2.5 px-1.5 border border-[rgba(242,235,235,0.18)] text-[#f2ebeb]/70 hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.6)] hover:opacity-100 transition-colors"
          >
            Reset view
          </button>

          <div className="h-px my-4 bg-[rgba(242,235,235,0.12)]" />

          <p className="font-body m-0 mb-[9px] text-[9px] tracking-[0.28em] uppercase text-[#f2ebeb]/40">Scene</p>
          <ToggleRow
            label="Environment"
            sub="Sky, cloud, ground and reflection. Turn off to rotate a full 360°."
            on={envOn}
            onClick={() => setEnvOn((v) => !v)}
          />
          <ToggleRow
            label="Model lighting"
            sub="Keeps the sky lighting and reflections on the book."
            on={lightingOn}
            onClick={() => setLightingOn((v) => !v)}
          />
          <ToggleRow
            label="Back light"
            sub="Lights the back cover from behind, so it isn't left in the sun's shadow."
            on={backLightOn}
            onClick={() => setBackLightOn((v) => !v)}
          />
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Options"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
            setInfoOpen(false);
          }}
          className="w-[46px] h-[46px] flex-none flex flex-col items-center justify-center bg-[rgba(14,13,11,0.68)] border border-[rgba(242,235,235,0.18)] backdrop-blur-md hover:border-[rgba(201,168,76,0.6)] transition-colors cursor-pointer"
        >
          <i
            className={`block w-[17px] h-[1.5px] bg-[#f2ebeb] my-[2.5px] transition-transform ${
              menuOpen ? "translate-y-[5.5px] rotate-45" : ""
            }`}
          />
          <i className={`block w-[17px] h-[1.5px] bg-[#f2ebeb] my-[2.5px] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <i
            className={`block w-[17px] h-[1.5px] bg-[#f2ebeb] my-[2.5px] transition-transform ${
              menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
