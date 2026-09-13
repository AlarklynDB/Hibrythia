// ============================================================
// Lightweight router shim — replaces react-router-dom for Astro
// ------------------------------------------------------------
// Astro handles routing at the file level (pages/*.astro), so we
// don't need a client-side router. This shim provides drop-in
// replacements for every react-router API the site used:
//   • <Link to="...">    → renders a real <a href="...">
//   • <NavLink to="...">  → real <a>, with className/isActive support
//   • useLocation()       → reads window.location (SSR-safe)
//   • <Outlet/>           → renders nothing (Astro <slot/> handles it)
//   • useNavigate()       → window.location.assign
//   • BrowserRouter/Routes/Route → render children (no-op)
//
// astro.config.mjs aliases the bare 'react-router-dom' specifier
// here as a universal safety net, so EVERY page/component import
// resolves transparently — zero import edits needed across the
// 149 page files.
// ============================================================

import { useState, useEffect } from 'react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

// ── <Link> ──────────────────────────────────────────────────
// Same surface as react-router's Link, but outputs a plain anchor
// so it works in static HTML and gets crawled by bots.
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children?: ReactNode
}

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

// ── useLocation() ───────────────────────────────────────────
// Returns an object shaped like react-router's location.
//
// Hydration note: every page is pre-rendered at build time where
// window is undefined, so the server HTML is always generated with
// pathname '/'. The initial CLIENT render must produce that same
// value — if it read window.location straight away, React would see
// a className/aria-current mismatch during hydration, and React 18
// does not patch attribute mismatches, so the server's "Home is
// active" classes would stay in the DOM forever. Instead we start
// from the server-safe value on both sides and sync to the real URL
// in an effect, which triggers a normal re-render that actually
// writes the correct classes.
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

const SERVER_LOCATION: ShimLocation = { pathname: '/', search: '', hash: '' }

function getLocation(): ShimLocation {
  if (typeof window === 'undefined') return SERVER_LOCATION
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

export function useLocation(): ShimLocation {
  // Always start from the server value so the hydration render matches.
  const [loc, setLoc] = useState<ShimLocation>(SERVER_LOCATION)

  useEffect(() => {
    function update() { setLoc(getLocation()) }
    // Sync to the real URL once mounted (this is what fixes the
    // stale "Home" highlight on every non-home page).
    update()
    // fires on browser back/forward
    window.addEventListener('popstate', update)
    // patch pushState/replaceState so <Link> clicks also trigger update
    const _push = history.pushState.bind(history)
    const _replace = history.replaceState.bind(history)
    history.pushState = function (...args) { const r = _push(...args); update(); return r }
    history.replaceState = function (...args) { const r = _replace(...args); update(); return r }
    return () => {
      window.removeEventListener('popstate', update)
      history.pushState = _push
      history.replaceState = _replace
    }
  }, [])

  return loc
}

// ── <NavLink> ───────────────────────────────────────────────
// react-router's NavLink supports className/style/children as a
// function of { isActive }. We compute isActive from the real URL
// (matches react-router's `end` semantics) and pass it through.
interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'style' | 'children'> {
  to: string
  end?: boolean
  className?: string | ((props: { isActive: boolean }) => string)
  style?: React.CSSProperties | ((props: { isActive: boolean }) => React.CSSProperties)
  children?: ReactNode | ((props: { isActive: boolean }) => ReactNode)
}

export function NavLink({ to, end, className, style, children, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(to + '/')
  const resolvedClass = typeof className === 'function' ? className({ isActive }) : className
  const resolvedStyle = typeof style === 'function' ? style({ isActive }) : style
  const resolvedChildren = typeof children === 'function' ? children({ isActive }) : children
  return (
    <a href={to} className={resolvedClass} style={resolvedStyle} aria-current={isActive ? 'page' : undefined} {...rest}>
      {resolvedChildren}
    </a>
  )
}

// ── Compatibility no-ops ────────────────────────────────────
export function Outlet() {
  return null
}

export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Route(_: { path?: string; element?: ReactNode; index?: boolean; children?: ReactNode }) {
  return null
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined') window.location.assign(to)
  }
}

