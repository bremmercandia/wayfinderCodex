import { useTranslation } from "react-i18next";
import { races } from "@/data/races";
import { cn } from "@/lib/utils";
import type { FactionId } from "@/types/game";

interface RacePickerProps {
  faction: FactionId | null;
  value: string | null;
  onChange: (raceId: string) => void;
}

export const RacePicker = ({ faction, value, onChange }: RacePickerProps) => {
  const { t } = useTranslation();
  const available = races.filter((race) => race.faction === faction);

  if (!faction) {
    return (
      <p className="parchment-panel text-xs text-muted-foreground">
        {t("leveling.character.raceHint")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {available.map((race) => {
        const selected = value === race.id;

        return (
          <button
            key={race.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(race.id)}
            className={cn(
              "flex items-center gap-2 rounded-md border px-2.5 py-2 text-left text-sm transition-all",
              selected
                ? "border-primary/60 bg-primary/15 text-primary shadow-glow"
                : "border-border/70 bg-secondary/40 text-foreground hover:border-primary/40 hover:bg-secondary/70",
            )}
          >
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-sm border font-display text-[11px] font-bold uppercase",
                race.faction === "alliance"
                  ? "border-faction-alliance/50 bg-faction-alliance/15 text-faction-alliance"
                  : "border-faction-horde/50 bg-faction-horde/15 text-faction-horde",
              )}
            >
              {race.name.slice(0, 2)}
            </span>
            <span className="truncate">{race.name}</span>
          </button>
        );
      })}
    </div>
  );
};