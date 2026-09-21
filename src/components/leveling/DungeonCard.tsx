import { ChevronRight, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";
import type { Dungeon } from "@/types/game";

interface DungeonCardProps {
  dungeon: Dungeon;
  questCount: number;
  selected: boolean;
  onSelect: (dungeonId: string) => void;
}

export const DungeonCard = ({ dungeon, questCount, selected, onSelect }: DungeonCardProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const factionVariant =
    dungeon.faction === "alliance" ? "alliance" : dungeon.faction === "horde" ? "horde" : "neutral";
  const factionLabel =
    dungeon.faction === "alliance"
      ? t("common.alliance")
      : dungeon.faction === "horde"
        ? t("common.horde")
        : t("common.both");

  return (
    <Card
      variant={selected ? "highlight" : "panel"}
      className={cn("transition-all", selected && "ring-1 ring-primary/40")}
    >
      <CardHeader className="gap-2 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="coord">
            {t("leveling.dungeons.levelRange")} {dungeon.levelRange.min}-{dungeon.levelRange.max}
          </Badge>
          <Badge variant={factionVariant}>{factionLabel}</Badge>
          {dungeon.wing ? (
            <Badge variant="gold">
              {t("leveling.dungeons.wing")} {dungeon.wing}
            </Badge>
          ) : null}
        </div>

        <CardTitle className="text-base sm:text-lg">
          <WowheadLink type="zone" name={dungeon.name} wowheadId={dungeon.wowheadId} />
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm">
          {localize(dungeon.summary, lang)}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5 text-primary" />
            {dungeon.zone}
          </span>
          <CoordCopy coordinates={dungeon.entrance.coordinates} />
        </div>

        {dungeon.groupNote ? (
          <p className="inline-flex items-start gap-1.5 text-xs text-muted-foreground">
            <Users className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <span>
              <span className="font-medium text-foreground">
                {t("leveling.dungeons.groupNote")}:
              </span>{" "}
              {localize(dungeon.groupNote, lang)}
            </span>
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="neutral">
            {questCount} {t("leveling.dungeons.questCount")}
          </Badge>
          <Button
            type="button"
            size="sm"
            variant={selected ? "premium" : "secondary"}
            onClick={() => onSelect(dungeon.id)}
            className="gap-1.5"
          >
            {selected ? t("leveling.dungeons.close") : t("leveling.dungeons.open")}
            <ChevronRight
              className={cn("size-4 transition-transform", selected && "rotate-90")}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};