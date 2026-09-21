import { Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { STANDING_KEYS, TIER_KEYS } from "@/lib/profession-labels";
import {
  getBandForSkill,
  getComparisonRows,
  getProfessionStanding,
  type ProfessionStanding,
} from "@/lib/professions";
import { cn } from "@/lib/utils";
import type { Profession } from "@/types/game";

interface ProfessionSkillComparisonProps {
  profession: Profession;
  characterLevel: number;
  skill: number;
  onSkillChange: (skill: number) => void;
}

const STANDING_ACCENT: Record<ProfessionStanding, string> = {
  ahead: "border-rarity-uncommon/50 bg-rarity-uncommon/15 text-rarity-uncommon",
  onTrack: "border-primary/50 bg-primary/15 text-primary",
  behind: "border-destructive/50 bg-destructive/15 text-destructive",
};

/** Ideal profession skill for the character level, plus the current standing. */
export const ProfessionSkillComparison = ({
  profession,
  characterLevel,
  skill,
  onSkillChange,
}: ProfessionSkillComparisonProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const standing = getProfessionStanding(skill, characterLevel);
  const rows = getComparisonRows(characterLevel);
  const currentBand = getBandForSkill(profession, skill);

  return (
    <Card variant="panel">
      <CardHeader className="gap-1.5">
        <CardTitle className="inline-flex items-center gap-2 text-base">
          <Gauge className="size-4 text-primary" />
          {t("professions.comparison.title")}
        </CardTitle>
        <CardDescription>{t("professions.comparison.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-32 space-y-1.5">
            <Label htmlFor={`skill-${profession.id}`}>
              {t("professions.comparison.currentSkill")}
            </Label>
            <Input
              id={`skill-${profession.id}`}
              type="number"
              inputMode="numeric"
              min={0}
              max={300}
              value={String(skill)}
              onChange={(event) => onSkillChange(Number.parseInt(event.target.value, 10) || 0)}
              className="h-9"
            />
          </div>

          <div className="space-y-1.5">
            <span className="block text-xs text-muted-foreground">
              {t("professions.comparison.idealSkill")}
            </span>
            <Badge variant="gold" className={cn("border", STANDING_ACCENT[standing])}>
              {t(STANDING_KEYS[standing])} · {Math.min(characterLevel * 5, 300)}
            </Badge>
          </div>

          {currentBand ? (
            <div className="space-y-1.5">
              <span className="block text-xs text-muted-foreground">
                {t("professions.recipes.skillRange")}
              </span>
              <Badge variant="neutral">
                {currentBand.skillFrom}-{currentBand.skillTo} · {t(TIER_KEYS[currentBand.tier])}
              </Badge>
            </div>
          ) : null}
        </div>

        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border/70 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-2 py-2 font-medium">
                  {t("professions.comparison.characterLevel")}
                </th>
                <th className="px-2 py-2 font-medium">
                  {t("professions.comparison.idealSkill")}
                </th>
                <th className="px-2 py-2 font-medium">{t("professions.comparison.tier")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const isCurrentLevel = row.characterLevel === characterLevel;

                return (
                  <tr
                    key={row.characterLevel}
                    className={cn(
                      "border-b border-border/40",
                      isCurrentLevel ? "bg-primary/10" : "hover:bg-secondary/40",
                    )}
                  >
                    <td className="px-2 py-1.5 text-muted-foreground">
                      {row.characterLevel}
                      {isCurrentLevel ? (
                        <Badge variant="gold" className="ml-2">
                          {t("professions.comparison.yourLevel")}
                        </Badge>
                      ) : null}
                    </td>
                    <td className="px-2 py-1.5 font-mono text-[11px] text-parchment">
                      {row.targetSkill}
                    </td>
                    <td className="px-2 py-1.5 text-muted-foreground">
                      {t(TIER_KEYS[row.tier])}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-muted-foreground">
          {localize(profession.trainerNote, lang)}
        </p>
      </CardContent>
    </Card>
  );
};