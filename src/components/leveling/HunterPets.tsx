import { PawPrint } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hunterPets } from "@/data/hunterPets";
import { useLang } from "@/hooks/use-lang";
import { useWowheadTooltips } from "@/hooks/use-wowhead-tooltips";
import { localize } from "@/lib/localize";

const VISIBLE_PETS = 6;

interface HunterPetsProps {
  level: number;
}

/**
 * Hunter-only section: the best tameable pets up to the character level, ordered
 * from the highest level pet the player can already tame downwards.
 */
export const HunterPets = ({ level }: HunterPetsProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const pets = hunterPets
    .filter((pet) => pet.levelRange.min <= level + 3)
    .sort((left, right) => right.levelRange.min - left.levelRange.min)
    .slice(0, VISIBLE_PETS);

  useWowheadTooltips(`hunter-pets-${level}-${lang}`);

  return (
    <Card variant="ornate" className="animate-fade-up">
      <CardHeader className="gap-2">
        <CardTitle className="inline-flex items-center gap-2 gold-text">
          <PawPrint className="size-4" />
          {t("leveling.hunter.title")}
        </CardTitle>
        <CardDescription>{t("leveling.hunter.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {pets.length === 0 ? (
          <p className="parchment-panel text-xs">{t("leveling.hunter.empty")}</p>
        ) : (
          pets.map((pet) => (
            <article
              key={pet.id}
              className="rounded-md border border-border/70 bg-secondary/30 p-3 transition-colors hover:border-primary/30"
            >
              <header className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-sm font-semibold tracking-wide text-parchment">
                  <WowheadLink type="npc" name={pet.name} wowheadId={pet.wowheadId} />
                </h3>
                <Badge variant="neutral">
                  {t("leveling.hunter.family")}: {pet.family}
                </Badge>
                <Badge variant="coord">
                  {t("common.level")} {pet.levelRange.min}-{pet.levelRange.max}
                </Badge>
              </header>

              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                <span className="font-medium text-foreground/80">
                  {t("leveling.hunter.why")}:
                </span>{" "}
                {localize(pet.reason, lang)}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>{pet.zone}</span>
                <CoordCopy coordinates={pet.coordinates} />
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">
                  {t("leveling.hunter.notes")}:
                </span>{" "}
                {localize(pet.notes, lang)}
              </p>
            </article>
          ))
        )}
      </CardContent>
    </Card>
  );
};