import { useState } from "react";
import { Compass, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CharacterForm } from "@/components/leveling/CharacterForm";
import { ClassTips } from "@/components/leveling/ClassTips";
import { DungeonList } from "@/components/leveling/DungeonList";
import { DungeonQuests } from "@/components/leveling/DungeonQuests";
import { HunterPets } from "@/components/leveling/HunterPets";
import { PageShell } from "@/components/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dungeonQuests } from "@/data/dungeonQuests";
import { dungeons } from "@/data/dungeons";
import { hunterPets } from "@/data/hunterPets";
import { professions } from "@/data/professions";
import { useCharacter } from "@/hooks/use-character";
import {
  getDungeonById,
  getDungeonsForLevel,
  getUpcomingDungeons,
  isAvailableToFaction,
} from "@/lib/leveling";

const LevelingPage = () => {
  const { t } = useTranslation();
  const { faction, classId, level, isConfigured } = useCharacter();
  const [selectedDungeonId, setSelectedDungeonId] = useState<string | null>(null);

  const recommended = faction ? getDungeonsForLevel(level, faction) : [];
  const upcoming = faction ? getUpcomingDungeons(level, faction) : [];

  const candidate = selectedDungeonId ? getDungeonById(selectedDungeonId) : null;
  const activeDungeon =
    candidate && faction && isAvailableToFaction(candidate.faction, faction) ? candidate : null;

  const stats = [
    { label: t("home.stats.dungeons"), value: dungeons.length },
    { label: t("home.stats.quests"), value: dungeonQuests.length },
    { label: t("home.stats.pets"), value: hunterPets.length },
    { label: t("home.stats.professions"), value: professions.length },
  ];

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-6">
      <section className="ornate-frame animate-fade-up overflow-hidden">
        <div className="space-y-4 p-6 sm:p-8">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles className="size-3.5" />
            {t("common.appTagline")}
          </Badge>

          <h1 className="font-display text-2xl font-bold leading-tight tracking-wide text-parchment sm:text-4xl">
            <span className="gold-text">{t("home.hero.title")}</span>
          </h1>

          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t("home.hero.subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="premium" size="lg">
              <a href="#character-form">{t("home.hero.start")}</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/professions">{t("nav.professions")}</Link>
            </Button>
          </div>

          <dl className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-border/70 bg-secondary/30 px-3 py-2"
              >
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="font-display text-xl font-bold text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div id="character-form" className="scroll-mt-24">
        <CharacterForm />
      </div>

      {!isConfigured || !faction || !classId ? (
        <Card variant="panel">
          <CardHeader className="gap-2">
            <CardTitle className="inline-flex items-center gap-2">
              <Compass className="size-4 text-primary" />
              {t("leveling.emptyState.title")}
            </CardTitle>
            <CardDescription>{t("leveling.emptyState.description")}</CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-8">
          <DungeonList
            dungeons={recommended}
            upcoming={upcoming}
            faction={faction}
            selectedDungeonId={activeDungeon?.id ?? null}
            onSelect={(dungeonId) =>
              setSelectedDungeonId((current) => (current === dungeonId ? null : dungeonId))
            }
          />

          {activeDungeon ? (
            <DungeonQuests dungeon={activeDungeon} faction={faction} />
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2">
            {classId === "hunter" ? <HunterPets level={level} /> : null}

            <ClassTips
              classId={classId}
              level={level}
              className={classId === "hunter" ? undefined : "lg:col-span-2"}
            />
          </div>
        </div>
      )}
      </div>
    </PageShell>
  );
};

export default LevelingPage;