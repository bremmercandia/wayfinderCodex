import { useTranslation } from "react-i18next";
import { ClassCrest } from "@/components/leveling/ClassCrest";
import { classes } from "@/data/classes";
import { races } from "@/data/races";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";
import type { WowClassId } from "@/types/game";

interface ClassPickerProps {
  raceId: string | null;
  value: WowClassId | null;
  onChange: (classId: WowClassId) => void;
}

export const ClassPicker = ({ raceId, value, onChange }: ClassPickerProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const race = races.find((candidate) => candidate.id === raceId) ?? null;
  const available = race
    ? classes.filter((candidate) => race.classes.includes(candidate.id))
    : [];

  if (!race) {
    return (
      <p className="parchment-panel text-xs text-muted-foreground">
        {t("leveling.character.classHint")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {available.map((wowClass) => {
        const selected = value === wowClass.id;

        return (
          <button
            key={wowClass.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(wowClass.id)}
            className={cn(
              "flex items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-all",
              selected
                ? "border-primary/60 bg-primary/10 shadow-glow"
                : "border-border/70 bg-secondary/40 hover:border-primary/40 hover:bg-secondary/70",
            )}
          >
            <ClassCrest classId={wowClass.id} label={wowClass.name.slice(0, 2)} selected={selected} />
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm text-foreground">{wowClass.name}</span>
              <span className="truncate text-[11px] text-muted-foreground">
                {localize(wowClass.roles, lang)}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};