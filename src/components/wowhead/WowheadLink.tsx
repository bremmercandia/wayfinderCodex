import { useTranslation } from "react-i18next";
import { buildWowheadDataAttribute, buildWowheadUrl } from "@/lib/wowhead";
import { cn } from "@/lib/utils";
import type { WowheadType } from "@/types/game";

interface WowheadLinkProps {
  /** Wowhead entity kind used to build the URL. */
  type: WowheadType;
  /** Entity name; also the search query when there is no verified id. */
  name: string;
  /** Verified Wowhead Classic id. Without it the link opens a Wowhead search. */
  wowheadId?: number;
  className?: string;
}

/**
 * Renders a Wowhead link. With a verified `wowheadId` the anchor carries the
 * `data-wowhead` attribute that Wowhead's power.js turns into an interactive
 * tooltip; without one it degrades to a search link instead of showing a wrong
 * tooltip.
 */
export const WowheadLink = ({ type, name, wowheadId, className }: WowheadLinkProps) => {
  const { t } = useTranslation();
  const hasVerifiedId = typeof wowheadId === "number";

  return (
    <a
      href={buildWowheadUrl(type, { id: wowheadId, query: name })}
      data-wowhead={buildWowheadDataAttribute(type, wowheadId)}
      target="_blank"
      rel="noreferrer noopener"
      title={hasVerifiedId ? undefined : t("common.wowheadSearchHint")}
      className={cn(
        "rounded-sm text-parchment underline decoration-primary/40 decoration-dotted underline-offset-2 transition-colors hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {name}
    </a>
  );
};