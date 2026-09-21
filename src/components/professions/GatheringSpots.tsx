import { MapPinned } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { getGatheringSpotsForLevel } from "@/lib/professions";
import type { Profession } from "@/types/game";

interface GatheringSpotsProps {
  profession: Profession;
  characterLevel: number;
}

/** Where to farm the materials this profession needs at the character's level. */
export const GatheringSpots = ({ profession, characterLevel }: GatheringSpotsProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const spots = getGatheringSpotsForLevel(profession, characterLevel);

  return (
    <Card variant="panel">
      <CardHeader className="gap-1.5">
        <CardTitle className="inline-flex items-center gap-2 text-base">
          <MapPinned className="size-4 text-primary" />
          {t("professions.spots.title")}
        </CardTitle>
        <CardDescription>{t("professions.spots.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {spots.length === 0 ? (
          <p className="parchment-panel text-xs">{t("professions.spots.empty")}</p>
        ) : (
          spots.map((spot) => (
            <article
              key={`${spot.zone}-${spot.characterLevelRange.min}`}
              className="rounded-md border border-border/70 bg-secondary/30 p-3"
            >
              <header className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-sm font-semibold tracking-wide text-parchment">
                  {spot.zone}
                </h3>
                <Badge variant="coord">
                  {spot.characterLevelRange.min}-{spot.characterLevelRange.max}
                </Badge>
              </header>

              <p className="mt-1 text-[11px] text-muted-foreground">
                {spot.materials.join(" · ")}
              </p>

              <p className="mt-1.5 text-xs text-muted-foreground">{localize(spot.notes, lang)}</p>

              {spot.coordinates ? (
                <div className="mt-2">
                  <CoordCopy coordinates={spot.coordinates} />
                </div>
              ) : null}
            </article>
          ))
        )}
      </CardContent>
    </Card>
  );
};