import { useTranslation } from "react-i18next";
import { EconomyGuide } from "@/components/professions/EconomyGuide";
import { GatheringSpots } from "@/components/professions/GatheringSpots";
import { ProfessionSkillComparison } from "@/components/professions/ProfessionSkillComparison";
import { RecipeTable } from "@/components/professions/RecipeTable";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCharacter } from "@/hooks/use-character";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import { getPairSuggestions, getProfessionStanding } from "@/lib/professions";
import { STANDING_KEYS } from "@/lib/profession-labels";
import type { Profession } from "@/types/game";

interface ProfessionGuideProps {
  profession: Profession;
}

/** Full leveling guide for one selected profession. */
export const ProfessionGuide = ({ profession }: ProfessionGuideProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { level, professionSkills, setProfessionSkill, professions: selection } = useCharacter();

  const skill = professionSkills[profession.id] ?? 1;
  const standing = getProfessionStanding(skill, level);
  const pairs = getPairSuggestions(
    profession,
    [...selection.primary, ...selection.secondary],
  );

  return (
    <section className="space-y-4">
      <Card variant="ornate">
        <CardHeader className="gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle className="gold-text">{profession.name}</CardTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={standing === "behind" ? "destructive" : "gold"}>
                {t(STANDING_KEYS[standing])}
              </Badge>
              <Badge variant="neutral">
                {t("professions.select.blurb")}:{" "}
                {t(
                  profession.kind === "secondary"
                    ? "professions.select.secondary"
                    : profession.kind === "gathering"
                      ? "professions.select.gathering"
                      : "professions.select.primary",
                )}
              </Badge>
            </div>
          </div>
          <CardDescription>{localize(profession.blurb, lang)}</CardDescription>
          {pairs.length > 0 ? (
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">
                {t("professions.select.pairs")}:
              </span>{" "}
              {pairs.map((pair) => pair.name).join(", ")}
            </p>
          ) : null}
        </CardHeader>

        <CardContent>
          <ProfessionSkillComparison
            profession={profession}
            characterLevel={level}
            skill={skill}
            onSkillChange={(next) => setProfessionSkill(profession.id, next)}
          />
        </CardContent>
      </Card>

      <RecipeTable profession={profession} currentSkill={skill} />

      <div className="grid gap-4 lg:grid-cols-2">
        <GatheringSpots profession={profession} characterLevel={level} />
        <EconomyGuide profession={profession} />
      </div>
    </section>
  );
};