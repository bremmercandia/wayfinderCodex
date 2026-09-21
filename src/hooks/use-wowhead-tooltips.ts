import { useEffect } from "react";

const RETRY_DELAY_MS = 250;
const MAX_ATTEMPTS = 40;

/**
 * Re-runs `window.$WowheadPower.refreshLinks()` whenever the rendered guide data
 * changes.
 *
 * Wowhead's power.js loads asynchronously and only wires the tooltips of the
 * elements present in the DOM at that moment, so the refresh has to happen after
 * React commits new dungeon/quest/profession entries. When the widget has not
 * finished loading yet, we retry with a bounded delay instead of dropping the
 * refresh (which would leave the new links without tooltips).
 *
 * `refreshKey` must be a stable string that changes with the data on screen — it
 * is the effect dependency and a value in its own right, so a key of "" skips the
 * whole scan.
 */
export const useWowheadTooltips = (refreshKey: string) => {
  useEffect(() => {
    if (!refreshKey) return undefined;

    let cancelled = false;
    let attempts = 0;
    let timer: number | undefined;

    const refresh = () => {
      if (cancelled) return;

      const power = window.$WowheadPower;
      if (power && typeof power.refreshLinks === "function") {
        power.refreshLinks();
        return;
      }

      attempts += 1;
      if (attempts < MAX_ATTEMPTS) {
        timer = window.setTimeout(refresh, RETRY_DELAY_MS);
      }
    };

    refresh();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [refreshKey]);
};