import { useEffect, useState } from "react";
import { blizzardConfig, isLiveApiEnabled } from "@/config/blizzard.config";
import { getRealmStatus, type RealmStatus } from "@/services/blizzardService";

export type DataSource = "curated" | "live" | "connecting";

/**
 * Reports where the guide data comes from. Without a configured proxy this
 * resolves to "curated" and no network request is ever made.
 */
export const useBlizzardSource = () => {
  const liveEnabled = isLiveApiEnabled();
  const [realms, setRealms] = useState<RealmStatus[] | null>(null);

  useEffect(() => {
    if (!liveEnabled) {
      setRealms(null);
      return undefined;
    }

    let cancelled = false;
    void getRealmStatus().then((result) => {
      if (!cancelled) setRealms(result);
    });

    return () => {
      cancelled = true;
    };
  }, [liveEnabled]);

  const source: DataSource = !liveEnabled ? "curated" : realms ? "live" : "connecting";

  return {
    source,
    isLive: liveEnabled,
    realmCount: realms?.length ?? 0,
    namespace: blizzardConfig.namespace,
  };
};