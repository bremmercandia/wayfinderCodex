import { Info, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { QuestCard } from "@/components/leveling/QuestCard";
import { QuestChain } from "@/components/leveling/QuestChain";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { useWowheadTooltips } from "@/hooks/use-wowhead-tooltips";
import { getDungeonQuests, groupDungeonQuests } from "@/lib/leveling";
import { localize, localizeList } from "@/lib/localize";
import { buildWowheadUrl } from "@/lib/wowhead";
import type { Dungeon, FactionId } from "@/types/game";

interface DungeonQuestsProps {
  dungeon: Dungeon;
  faction: FactionId;
}

/** Full quest breakdown of the selected dungeon: pick-up, chains and rewards. */
export const DungeonQuests = ({ dungeon, faction }: DungeonQuestsProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const quests = getDungeonQuests(dungeon.id, faction);
  const { chains, standalone } = groupDungeonQuests(quests);
  const tips = localizeList(dungeon.tips, lang);

  // Re-scan Wowhead tooltips whenever this panel's data changes.
  useWowheadTooltips(`dungeon-${dungeon.id}-${faction}-${lang}-${quests.length}`);

  return (
    <Card variant="ornate" className="animate-fade-up">
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="gold-text">
            <WowheadLink type="zone" name={dungeon.name} wowheadId={dungeon.wowheadId} />
            {dungeon.wing ? ` — ${dungeon.wing}` : ""}
          </CardTitle>
          <Badge variant="coord">
            {dungeon.levelRange.min}-{dungeon.levelRange.max}
          </Badge>
          <Badge variant={dungeon.faction === "alliance" ? "alliance" : dungeon.faction === "horde" ? "horde" : "neutral"}>
            {dungeon.faction === "alliance"
              ? t("common.alliance")
              : dungeon.faction === "horde"
                ? t("common.horde")
                : t("common.both")}
          </Badge>
        </div>

        <CardDescription>{localize(dungeon.summary, lang)}</CardDescription>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/80">
            {t("leveling.dungeons.entrance")}:
          </span>
          <span>{dungeon.entrance.zone}</span>
          <CoordCopy coordinates={dungeon.entrance.coordinates} />
        </div>

        {dungeon.entrance.notes ? (
          <p className="parchment-panel text-xs">{localize(dungeon.entrance.notes, lang)}</p>
        ) : null}
      </CardHeader>

      <CardContent className="space-y-5">
        {tips.length > 0 ? (
          <section className="space-y-2">
            <h3 className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80">
              <Lightbulb className="size-3.5 text-primary" />
              {t("common.tips")}
            </h3>
            <ul className="space-y-1.5">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-2 text-xs text-muted-foreground sm:text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="ornate-divider" />

        <section className="space-y-3">
          <div>
            <h3 className="font-display text-base font-semibold tracking-wide text-parchment">
              {t("leveling.quests.title")}
            </h3>
            <p className="text-xs text-muted-foreground">{t("leveling.quests.subtitle")}</p>
          </div>

          {quests.length === 0 ? (
            <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
              <p className="inline-flex items-start gap-1.5 text-xs text-muted-foreground">
                <Info className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {t("leveling.quests.empty")}
              </p>
              <a
                href={buildWowheadUrl("quest", { query: dungeon.name })}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-xs font-medium text-primary underline underline-offset-2"
              >
                {t("leveling.quests.openOnWowhead")}
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {chains.map((chain) => (
                <QuestChain key={chain.id} chain={chain} />
              ))}

              {standalone.length > 0 ? (
                <div className="space-y-3">
                  {chains.length > 0 ? (
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                      {t("leveling.quests.standalone")}
                    </h4>
                  ) : null}
                  {standalone.map((quest) => (
                    <QuestCard key={quest.id} quest={quest} />
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </section>
      </CardContent>
    </Card>
  );
};