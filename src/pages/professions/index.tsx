import { Link } from "react-router-dom";
import { Hammer, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProfessionGuide } from "@/components/professions/ProfessionGuide";
import { ProfessionSelect } from "@/components/professions/ProfessionSelect";
import { PageShell } from "@/components/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCharacter } from "@/hooks/use-character";
import { getProfessionsByIds } from "@/lib/professions";

const ProfessionsPage = () => {
  const { t } = useTranslation();
  const { professions: selection, level, isConfigured } = useCharacter();

  const selected = getProfessionsByIds([...selection.primary, ...selection.secondary]);

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-6">
      <section className="ornate-frame animate-fade-up">
        <div className="space-y-4 p-6 sm:p-8">
          <Badge variant="gold" className="gap-1.5">
            <Hammer className="size-3.5" />
            {t("nav.professions")}
          </Badge>

          <h1 className="font-display text-2xl font-bold leading-tight tracking-wide sm:text-3xl">
            <span className="gold-text">{t("professions.select.title")}</span>
          </h1>

          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t("professions.select.subtitle")}
          </p>

          {!isConfigured ? (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs text-muted-foreground">
                {t("leveling.emptyState.description")}
              </p>
              <Button asChild variant="premium" size="sm">
                <Link to="/">{t("home.hero.start")}</Link>
              </Button>
            </div>
          ) : (
            <Badge variant="neutral" className="gap-1.5">
              <Sparkles className="size-3.5 text-primary" />
              {t("common.level")} {level}
            </Badge>
          )}
        </div>
      </section>

      <ProfessionSelect />

      {selected.length === 0 ? (
        <Card variant="panel">
          <CardHeader className="gap-2">
            <CardTitle>{t("professions.guide.emptyTitle")}</CardTitle>
            <CardDescription>{t("professions.guide.emptyDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            {t("professions.select.empty")}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-10">
          {selected.map((profession) => (
            <ProfessionGuide key={profession.id} profession={profession} />
          ))}
        </div>
      )}
      </div>
    </PageShell>
  );
};

export default ProfessionsPage;