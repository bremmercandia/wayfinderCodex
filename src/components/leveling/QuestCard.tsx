import { Share2, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/use-lang";
import { localize, localizeList } from "@/lib/localize";
import type { DungeonQuest } from "@/types/game";

interface QuestCardProps {
  quest: DungeonQuest;
  /** Hides the prerequisite block inside chain renders where order is implied. */
  showPrerequisites?: boolean;
}

/** One quest with where to pick it up, its chain prerequisites and its rewards. */
export const QuestCard = ({ quest, showPrerequisites = true }: QuestCardProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const steps = localizeList(quest.steps, lang);

  return (
    <article className="rounded-md border border-border/70 bg-secondary/30 p-3 transition-colors hover:border-primary/30">
      <header className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-sm font-semibold tracking-wide text-parchment">
          <WowheadLink type="quest" name={quest.name} wowheadId={quest.wowheadId} />
        </h4>
        {quest.level ? (
          <Badge variant="coord">
            {t("common.requiredLevel")} {quest.level}
          </Badge>
        ) : null}
        {quest.shareable ? (
          <Badge variant="neutral" className="gap-1">
            <Share2 className="size-3" />
            {t("common.shareable")}
          </Badge>
        ) : null}
      </header>

      <div className="mt-2 space-y-1.5 text-xs text-muted-foreground">
        <p className="flex flex-wrap items-center gap-2">
          <span className="font-medium uppercase tracking-wider text-foreground/80">
            {t("leveling.quests.whereToGet")}:
          </span>
          <WowheadLink
            type="npc"
            name={quest.giver.npc}
            wowheadId={quest.giver.wowheadId}
            className="text-xs"
          />
          <span>· {quest.giver.zone}</span>
        </p>

        {quest.giver.coordinates ? (
          <CoordCopy coordinates={quest.giver.coordinates} zone={quest.giver.zone} />
        ) : null}

        {quest.giver.note ? <p>{localize(quest.giver.note, lang)}</p> : null}
      </div>

      {showPrerequisites ? (
        <div className="mt-3 space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-foreground/70">
            {t("common.prerequisites")}
          </p>
          {quest.prerequisites.length === 0 ? (
            <p className="text-xs text-muted-foreground">{t("common.noPrerequisites")}</p>
          ) : (
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
              {quest.prerequisites.map((prerequisite) => (
                <li key={prerequisite.name} className="text-muted-foreground">
                  <WowheadLink
                    type="quest"
                    name={prerequisite.name}
                    wowheadId={prerequisite.wowheadId}
                    className="text-xs"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      {steps.length > 0 ? (
        <ul className="mt-3 space-y-1">
          {steps.map((step) => (
            <li key={step} className="flex gap-2 text-xs text-muted-foreground">
              <Target className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground/80">{t("common.reward")}:</span>{" "}
        {localize(quest.reward, lang)}
      </p>
    </article>
  );
};