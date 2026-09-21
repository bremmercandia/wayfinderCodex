import { Check, Hammer, Leaf, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { getPairSuggestions, type SelectionBlock } from "@/lib/professions";
import { cn } from "@/lib/utils";
import type { Profession } from "@/types/game";

interface ProfessionCardProps {
  profession: Profession;
  selected: boolean;
  selectedIds: string[];
  blocked: Exclude<SelectionBlock, "duplicate"> | null;
  onToggle: (professionId: string) => void;
}

const KIND_ICON = {
  primary: Hammer,
  gathering: Leaf,
  secondary: Leaf,
} as const;

const BLOCK_KEY: Record<Exclude<SelectionBlock, "duplicate">, string> = {
  primaryLimit: "professions.select.blockPrimary",
  secondaryLimit: "professions.select.blockSecondary",
};

export const ProfessionCard = ({
  profession,
  selected,
  selectedIds,
  blocked,
  onToggle,
}: ProfessionCardProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const Icon = selected ? Check : blocked ? Lock : KIND_ICON[profession.kind];
  const pairs = getPairSuggestions(profession, selectedIds);

  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={Boolean(blocked)}
      onClick={() => onToggle(profession.id)}
      className={cn(
        "text-left transition-transform",
        !blocked && "hover:-translate-y-0.5",
        blocked && "cursor-not-allowed opacity-60",
      )}
    >
      <Card
        variant={selected ? "highlight" : "panel"}
        className={cn("h-full", selected && "ring-1 ring-primary/40")}
      >
        <CardContent className="space-y-2 p-4">
          <header className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2">
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-md border",
                  selected
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border/70 bg-background/60 text-muted-foreground",
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="font-display text-sm font-semibold tracking-wide text-parchment">
                {profession.name}
              </span>
            </span>
            <Badge variant={profession.kind === "secondary" ? "neutral" : "gold"}>
              {profession.kind === "secondary"
                ? t("professions.select.secondary")
                : profession.kind === "gathering"
                  ? t("professions.select.gathering")
                  : t("professions.select.primary")}
            </Badge>
          </header>

          <p className="text-xs text-muted-foreground">{localize(profession.blurb, lang)}</p>

          <p className="text-[11px] text-muted-foreground/90">
            <span className="font-medium text-foreground/70">
              {t("professions.select.trainer")}:
            </span>{" "}
            {localize(profession.trainerNote, lang)}
          </p>

          {pairs.length > 0 ? (
            <p className="text-[11px] text-muted-foreground/90">
              <span className="font-medium text-foreground/70">
                {t("professions.select.pairs")}:
              </span>{" "}
              {pairs.map((pair) => pair.name).join(", ")}
            </p>
          ) : null}

          {blocked ? (
            <p className="text-[11px] font-medium text-destructive">{t(BLOCK_KEY[blocked])}</p>
          ) : null}
        </CardContent>
      </Card>
    </button>
  );
};