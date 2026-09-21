import { useTranslation } from "react-i18next";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { useWowheadTooltips } from "@/hooks/use-wowhead-tooltips";
import { localize } from "@/lib/localize";
import { SOURCE_KEYS, TIER_KEYS } from "@/lib/profession-labels";
import { getBandForSkill } from "@/lib/professions";
import { cn } from "@/lib/utils";
import type { Profession } from "@/types/game";

interface RecipeTableProps {
  profession: Profession;
  currentSkill: number;
}

/**
 * Recipe/gathering order from 1 to 300. The band matching the player's current
 * skill is highlighted so the next step is obvious.
 */
export const RecipeTable = ({ profession, currentSkill }: RecipeTableProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const currentBand = getBandForSkill(profession, currentSkill);
  const isGathering = profession.kind === "gathering";

  useWowheadTooltips(`recipes-${profession.id}-${currentSkill}-${lang}`);

  return (
    <Card variant="panel">
      <CardHeader className="gap-1.5">
        <CardTitle className="text-base">{t("professions.recipes.title")}</CardTitle>
        <CardDescription>{t("professions.recipes.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border/70 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="whitespace-nowrap px-2 py-2 font-medium">
                  {t("professions.recipes.skillRange")}
                </th>
                <th className="px-2 py-2 font-medium">
                  {isGathering
                    ? t("professions.recipes.material")
                    : t("professions.recipes.recipe")}
                </th>
                {!isGathering ? (
                  <th className="px-2 py-2 font-medium">
                    {t("professions.recipes.materials")}
                  </th>
                ) : null}
                <th className="px-2 py-2 font-medium">
                  {isGathering
                    ? t("professions.recipes.sourceWorld")
                    : t("professions.recipes.source")}
                </th>
              </tr>
            </thead>

            <tbody>
              {profession.bands.map((band) => {
                const isCurrent = currentBand?.skillFrom === band.skillFrom;

                return (
                  <tr
                    key={`${profession.id}-${band.skillFrom}`}
                    className={cn(
                      "border-b border-border/40 align-top transition-colors",
                      isCurrent ? "bg-primary/10" : "hover:bg-secondary/40",
                    )}
                  >
                    <td className="whitespace-nowrap px-2 py-2">
                      <span className="font-mono text-[11px] text-parchment">
                        {band.skillFrom}-{band.skillTo}
                      </span>
                      <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground">
                        {t(TIER_KEYS[band.tier])}
                      </span>
                      {isCurrent ? (
                        <Badge variant="gold" className="mt-1">
                          {t("professions.comparison.yourLevel")}
                        </Badge>
                      ) : null}
                    </td>

                    <td className="px-2 py-2">
                      <span className="font-medium text-foreground">
                        <WowheadLink
                          type="item"
                          name={band.recipe}
                          wowheadId={band.wowheadId}
                          className="text-xs"
                        />
                      </span>
                      {band.notes ? (
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          {localize(band.notes, lang)}
                        </p>
                      ) : null}
                    </td>

                    {!isGathering ? (
                      <td className="px-2 py-2 text-muted-foreground">
                        {(band.materials ?? []).length === 0 ? (
                          <span>-</span>
                        ) : (
                          <ul className="space-y-0.5">
                            {(band.materials ?? []).map((material) => (
                              <li key={material.name}>
                                {material.quantity}x{" "}
                                <WowheadLink
                                  type="item"
                                  name={material.name}
                                  wowheadId={material.wowheadId}
                                  className="text-xs"
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                    ) : null}

                    <td className="px-2 py-2 text-muted-foreground">
                      {band.source ? (
                        <Badge variant="neutral" className="mb-1">
                          {t(SOURCE_KEYS[band.source])}
                        </Badge>
                      ) : null}
                      <p className="text-[11px]">{localize(band.sourceDetail, lang)}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};