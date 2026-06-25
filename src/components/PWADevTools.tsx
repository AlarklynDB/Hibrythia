import { useEffect, useRef, useState } from 'react'

// ─── Constants ────────────────────────────────────────────────────────────────
const SHAKE_THRESHOLD  = 18
const SHAKE_COUNT_NEEDED = 4
const SHAKE_RESET_MS   = 1200
const TRIPLE_TAP_MS    = 600
const TOAST_DURATION_MS = 2200

// ─── Hard refresh helper ──────────────────────────────────────────────────────
async function hardRefresh() {
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations()
    await Promise.all(regs.map((r) => r.unregister()))
  }
  if ('caches' in window) {
    const keys = await caches.keys()
    await Promise.all(keys.map((k) => caches.delete(k)))
  }
  window.location.reload()
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PWADevTools() {
  const [toast, setToast] = useState<string | null>(null)

  // ── Shake detection ──────────────────────────────────────────────────────
  const lastAccel = useRef({ x: 0, y: 0, z: 0 })
  const shakeCount = useRef(0)
  const shakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    async function requestMotion() {
      if (
        typeof DeviceMotionEvent !== 'undefined' &&
        // @ts-expect-error — requestPermission is iOS-only
        typeof DeviceMotionEvent.requestPermission === 'function'
      ) {
        try {
          // @ts-expect-error
          await DeviceMotionEvent.requestPermission()
        } catch {
          // permission denied or not needed
        }
      }
    }
    requestMotion()

    function onMotion(e: DeviceMotionEvent) {
      const acc = e.accelerationIncludingGravity
      if (!acc) return
      const { x = 0, y = 0, z = 0 } = acc
      const prev = lastAccel.current
      const delta = Math.abs((x ?? 0) - prev.x) + Math.abs((y ?? 0) - prev.y) + Math.abs((z ?? 0) - prev.z)
      lastAccel.current = { x: x ?? 0, y: y ?? 0, z: z ?? 0 }

      if (delta > SHAKE_THRESHOLD) {
        shakeCount.current += 1
        if (shakeTimer.current) clearTimeout(shakeTimer.current)
        shakeTimer.current = setTimeout(() => { shakeCount.current = 0 }, SHAKE_RESET_MS)

        if (shakeCount.current >= SHAKE_COUNT_NEEDED) {
          shakeCount.current = 0
          if (shakeTimer.current) clearTimeout(shakeTimer.current)
          triggerRefresh('shake')
        }
      }
    }

    window.addEventListener('devicemotion', onMotion)
    return () => {
      window.removeEventListener('devicemotion', onMotion)
      if (shakeTimer.current) clearTimeout(shakeTimer.current)
    }
  }, [])

  // ── Triple-tap detection ─────────────────────────────────────────────────
  const tapCount = useRef(0)
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onTap(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement
      if (!target.closest('[data-pwa-tap]')) return
      tapCount.current += 1
      if (tapTimer.current) clearTimeout(tapTimer.current)
      tapTimer.current = setTimeout(() => { tapCount.current = 0 }, TRIPLE_TAP_MS)
      if (tapCount.current >= 3) {
        tapCount.current = 0
        if (tapTimer.current) clearTimeout(tapTimer.current)
        triggerRefresh('tap')
      }
    }
    document.addEventListener('click', onTap)
    document.addEventListener('touchend', onTap)
    return () => {
      document.removeEventListener('click', onTap)
      document.removeEventListener('touchend', onTap)
      if (tapTimer.current) clearTimeout(tapTimer.current)
    }
  }, [])

  function triggerRefresh(method: 'shake' | 'tap') {
    const msg = method === 'shake' ? '📳 Shake detected — refreshing...' : '👆 Triple-tap — refreshing...'
    setToast(msg)
    setTimeout(() => { hardRefresh() }, 800)
  }

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), TOAST_DURATION_MS)
    return () => clearTimeout(t)
  }, [toast])

  if (!toast) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: 'rgba(14,13,11,0.92)',
        border: '1px solid rgba(201,168,76,0.35)',
        borderRadius: '999px',
        padding: '0.5rem 1.25rem',
        fontSize: '0.8rem',
        color: '#c9a84c',
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 20px rgba(201,168,76,0.12)',
      }}
    >
      {toast}
    </div>
  )
}
