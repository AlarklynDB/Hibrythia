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

import { useState, useEffect, createContext, useContext } from 'react'
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
// window is undefined, so useLocation() cannot read the real URL on
// the server. The initial CLIENT render must produce the same value
// the server did — React 18 does not patch className/aria-current
// mismatches during hydration, so any disagreement leaves the
// server's classes in the DOM forever.
//
// To get the right answer from the first byte (no flash), the page
// path is passed in from BaseLayout.astro, which already knows it:
//   <Navbar currentPath={path} client:load />
// Navbar hands it to <LocationProvider>, and useLocation() seeds its
// state from it. Server and client both start with that value, so
// hydration matches AND the correct link is active immediately. The
// effect then syncs to window.location, which is a no-op visually.
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

const SERVER_LOCATION: ShimLocation = { pathname: '/', search: '', hash: '' }

const LocationContext = createContext<string | null>(null)

/** Provides the SSR-known pathname to every useLocation()/NavLink below it. */
export function LocationProvider({ pathname, children }: { pathname?: string; children?: ReactNode }) {
  return <LocationContext.Provider value={pathname ?? null}>{children}</LocationContext.Provider>
}

function getLocation(): ShimLocation {
  if (typeof window === 'undefined') return SERVER_LOCATION
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

export function useLocation(initialPathname?: string): ShimLocation {
  const contextPathname = useContext(LocationContext)
  // Seed from the SSR-known path (argument, then context). Both server
  // and client see the same value, so the hydration render matches.
  const seed = initialPathname ?? contextPathname
  const [loc, setLoc] = useState<ShimLocation>(
    seed ? { pathname: seed, search: '', hash: '' } : SERVER_LOCATION
  )

  useEffect(() => {
    function update() { setLoc(getLocation()) }
    // Sync to the real URL once mounted (also covers pages that
    // didn't pass a path — they correct themselves here).
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

