import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ClassPicker } from "@/components/leveling/ClassPicker";
import { FactionPicker } from "@/components/leveling/FactionPicker";
import { LevelPicker } from "@/components/leveling/LevelPicker";
import { RacePicker } from "@/components/leveling/RacePicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useCharacter } from "@/hooks/use-character";

/** Faction / race / class / level selector that drives the whole guide. */
export const CharacterForm = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
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
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <Card variant="ornate" className="animate-fade-up">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className="group min-w-0 flex-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={t("leveling.character.title")}
            >
              <span className="flex items-center gap-2">
                <CardTitle className="gold-text">{t("leveling.character.title")}</CardTitle>
                <ChevronDown className="size-4 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-180" />
              </span>
              <CardDescription className="mt-1">
                {t("leveling.character.subtitle")}
              </CardDescription>
            </button>
          </CollapsibleTrigger>
          <Button type="button" variant="ghost" size="sm" onClick={reset} className="gap-1.5">
            <RotateCcw className="size-3.5" />
            {t("leveling.character.reset")}
          </Button>
        </div>
      </CardHeader>

      <CollapsibleContent>
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
      </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};