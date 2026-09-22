import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DungeonCard } from "@/components/leveling/DungeonCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { getDungeonQuests } from "@/lib/leveling";
import type { Dungeon, FactionId } from "@/types/game";

interface DungeonListProps {
  dungeons: Dungeon[];
  upcoming: Dungeon[];
  faction: FactionId;
  selectedDungeonId: string | null;
  onSelect: (dungeonId: string) => void;
}

/** Dungeons matching the character level plus the next ones to aim for. */
export const DungeonList = ({
  dungeons,
  upcoming,
  faction,
  selectedDungeonId,
  onSelect,
}: DungeonListProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const questCountFor = (dungeon: Dungeon) =>
    getDungeonQuests(dungeon.id, faction).length;

  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <section className="space-y-4">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="group flex w-full items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={t("leveling.dungeons.title")}
          >
            <span>
              <h2 className="font-display text-xl font-bold tracking-wide text-parchment">
                {t("leveling.dungeons.title")}
              </h2>
              <p className="text-sm text-muted-foreground">{t("leveling.dungeons.subtitle")}</p>
            </span>
            <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
        {dungeons.length === 0 ? (
        <Card variant="panel">
          <CardContent className="pt-5 text-sm text-muted-foreground">
            {t("leveling.dungeons.empty")}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {dungeons.map((dungeon) => (
            <DungeonCard
              key={dungeon.id}
              dungeon={dungeon}
              questCount={questCountFor(dungeon)}
              selected={selectedDungeonId === dungeon.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}

      {upcoming.length > 0 ? (
        <Card variant="ornate">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{t("leveling.dungeons.upcoming")}</CardTitle>
            <CardDescription>
              {t("leveling.dungeons.levelRange")}: {upcoming[0].levelRange.min}+
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {upcoming.map((dungeon) => (
              <button
                key={dungeon.id}
                type="button"
                onClick={() => onSelect(dungeon.id)}
                className="rounded-md border border-border/70 bg-secondary/40 px-3 py-2 text-left text-sm transition-colors hover:border-primary/40 hover:bg-secondary/70"
              >
                <span className="block font-medium text-foreground">
                  {dungeon.name}
                  {dungeon.wing ? ` — ${dungeon.wing}` : ""}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {dungeon.levelRange.min}-{dungeon.levelRange.max} · {dungeon.zone}
                </span>
              </button>
            ))}
          </CardContent>
        </Card>
        ) : null}
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
};