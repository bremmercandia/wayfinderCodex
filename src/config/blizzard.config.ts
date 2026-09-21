/**
 * Immutable Blizzard/Wowhead configuration for the guide.
 *
 * Defaults live in code so the app always works in the preview and in the static
 * build, even when no `.env` is present. Override them locally or in CI with the
 * matching `VITE_*` variables (see `.env.example`) to point at the WoW Forever
 * namespaces the moment they are published.
 *
 * Secrets never belong here: a Blizzard client secret would live on a server, so
 * `apiBase` only ever points at a proxy endpoint, never at an API key.
 */
export const blizzardConfig = {
  /** e.g. `static-classic-us` - swap for the WoW Forever namespace later. */
  namespace: import.meta.env.VITE_BLIZZARD_NAMESPACE ?? "static-classic-us",
  region: import.meta.env.VITE_BLIZZARD_REGION ?? "us",
  locale: import.meta.env.VITE_BLIZZARD_LOCALE ?? "en_US",
  /**
   * Absolute base URL of a server-side proxy that holds the Blizzard client
   * credentials. Empty string = curated/static mode (no network calls at all).
   */
  apiBase: import.meta.env.VITE_BLIZZARD_API_BASE ?? "",
  /** Wowhead domain used for tooltips and links (classic / tbc / wotlk). */
  wowheadDomain: import.meta.env.VITE_WOWHEAD_DOMAIN ?? "classic",
  timeoutMs: 4000,
} as const;

export type BlizzardConfig = typeof blizzardConfig;

/** True when a proxy base is configured, i.e. live data can be requested. */
export const isLiveApiEnabled = (): boolean => blizzardConfig.apiBase.trim().length > 0;

/** Builds the Blizzard-style resource path (`/static-classic-us/realm/status`). */
export const buildBlizzardPath = (resource: string): string =>
  `/${blizzardConfig.namespace}/${resource.replace(/^\/+/, "")}`;