import { cn } from "@/lib/utils";
import type { WowClassId } from "@/types/game";

/**
 * Static class -> token class map. The strings are literal so Tailwind keeps the
 * generated utilities for every class colour.
 */
const CLASS_TOKEN: Record<WowClassId, string> = {
  warrior: "border-class-warrior/60 bg-class-warrior/15 text-class-warrior",
  paladin: "border-class-paladin/60 bg-class-paladin/15 text-class-paladin",
  hunter: "border-class-hunter/60 bg-class-hunter/15 text-class-hunter",
  rogue: "border-class-rogue/60 bg-class-rogue/15 text-class-rogue",
  priest: "border-class-priest/60 bg-class-priest/15 text-class-priest",
  shaman: "border-class-shaman/60 bg-class-shaman/15 text-class-shaman",
  mage: "border-class-mage/60 bg-class-mage/15 text-class-mage",
  warlock: "border-class-warlock/60 bg-class-warlock/15 text-class-warlock",
  druid: "border-class-druid/60 bg-class-druid/15 text-class-druid",
};

interface ClassCrestProps {
  classId: WowClassId;
  /** Two-letter monogram shown inside the crest. */
  label: string;
  selected?: boolean;
  className?: string;
}

/** Colour-coded class crest used by the pickers and the guide headers. */
export const ClassCrest = ({ classId, label, selected, className }: ClassCrestProps) => (
  <span
    className={cn(
      "flex size-9 shrink-0 items-center justify-center rounded-md border font-display text-xs font-bold uppercase tracking-wider transition-colors",
      CLASS_TOKEN[classId],
      selected && "ring-2 ring-primary/60 ring-offset-1 ring-offset-background",
      className,
    )}
  >
    {label}
  </span>
);