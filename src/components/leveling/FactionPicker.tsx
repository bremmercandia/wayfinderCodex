import { ShieldHalf, Swords } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { FactionId } from "@/types/game";

interface FactionPickerProps {
  value: FactionId | null;
  onChange: (faction: FactionId) => void;
}

const OPTIONS: { id: FactionId; gradient: string; ring: string; text: string }[] = [
  {
    id: "alliance",
    gradient: "bg-gradient-alliance",
    ring: "ring-faction-alliance/70",
    text: "text-faction-alliance",
  },
  {
    id: "horde",
    gradient: "bg-gradient-horde",
    ring: "ring-faction-horde/70",
    text: "text-faction-horde",
  },
];

export const FactionPicker = ({ value, onChange }: FactionPickerProps) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-3">
      {OPTIONS.map((option) => {
        const selected = value === option.id;
        const Icon = option.id === "alliance" ? ShieldHalf : Swords;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={cn(
              "group relative flex items-center gap-3 overflow-hidden rounded-lg border border-border/70 px-3 py-3 text-left transition-all",
              selected
                ? cn(option.gradient, "border-transparent ring-2", option.ring)
                : "bg-secondary/40 hover:border-primary/40 hover:bg-secondary/70",
            )}
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-md border",
                selected
                  ? "border-parchment/40 bg-background/25 text-parchment"
                  : cn("border-border/70 bg-background/60", option.text),
              )}
            >
              <Icon className="size-5" />
            </span>
            <span className="flex flex-col">
              <span
                className={cn(
                  "font-display text-sm font-semibold tracking-wide",
                  selected ? "text-parchment" : "text-foreground",
                )}
              >
                {option.id === "alliance" ? t("common.alliance") : t("common.horde")}
              </span>
              <span
                className={cn(
                  "text-[11px] uppercase tracking-[0.16em]",
                  selected ? "text-parchment/80" : "text-muted-foreground",
                )}
              >
                {option.id === "alliance" ? "Stormwind, Ironforge" : "Orgrimmar, Undercity"}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};