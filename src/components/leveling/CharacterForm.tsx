import { RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ClassPicker } from "@/components/leveling/ClassPicker";
import { FactionPicker } from "@/components/leveling/FactionPicker";
import { LevelPicker } from "@/components/leveling/LevelPicker";
import { RacePicker } from "@/components/leveling/RacePicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCharacter } from "@/hooks/use-character";

/** Faction / race / class / level selector that drives the whole guide. */
export const CharacterForm = () => {
  const { t } = useTranslation();
  const {
    faction,
    raceId,
    classId,
    level,
    setFaction,
    setRaceId,
    setClassId,
    setLevel,
    reset,
  } = useCharacter();

  return (
    <Card variant="ornate" className="animate-fade-up">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="gold-text">{t("leveling.character.title")}</CardTitle>
            <CardDescription className="mt-1">
              {t("leveling.character.subtitle")}
            </CardDescription>
          </div>
          <Button type="button" variant="ghost" size="sm" onClick={reset} className="gap-1.5">
            <RotateCcw className="size-3.5" />
            {t("leveling.character.reset")}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label>{t("leveling.character.faction")}</Label>
          <FactionPicker value={faction} onChange={setFaction} />
        </div>

        <div className="space-y-2">
          <Label>{t("leveling.character.race")}</Label>
          <RacePicker faction={faction} value={raceId} onChange={setRaceId} />
        </div>

        <div className="space-y-2">
          <Label>{t("leveling.character.class")}</Label>
          <ClassPicker raceId={raceId} value={classId} onChange={setClassId} />
        </div>

        <div className="ornate-divider" />

        <LevelPicker value={level} onChange={setLevel} />
      </CardContent>
    </Card>
  );
};