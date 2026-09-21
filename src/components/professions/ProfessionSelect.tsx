import { useTranslation } from "react-i18next";
import { ProfessionCard } from "@/components/professions/ProfessionCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { professions } from "@/data/professions";
import { useCharacter } from "@/hooks/use-character";
import {
  MAX_PRIMARY_PROFESSIONS,
  MAX_SECONDARY_PROFESSIONS,
  countSelectedProfessions,
  getSelectionBlock,
  isProfessionSelected,
} from "@/lib/professions";

/** Picker that enforces the Classic rule: 2 primary + 3 secondary professions. */
export const ProfessionSelect = () => {
  const { t } = useTranslation();
  const { professions: selection, toggleProfession } = useCharacter();

  const selectedIds = [...selection.primary, ...selection.secondary];
  const primary = professions.filter((profession) => profession.kind !== "secondary");
  const secondary = professions.filter((profession) => profession.kind === "secondary");

  const selectedPrimary = selection.primary.filter((id) =>
    professions.some((profession) => profession.id === id && profession.kind !== "secondary"),
  ).length;

  return (
    <Card variant="ornate" className="animate-fade-up">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="gold-text">{t("professions.select.title")}</CardTitle>
          <Badge variant="gold">
            {countSelectedProfessions(selection)}/{MAX_PRIMARY_PROFESSIONS + MAX_SECONDARY_PROFESSIONS}
          </Badge>
        </div>
        <CardDescription>{t("professions.select.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="parchment-panel text-xs">{t("professions.select.hint")}</p>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              {t("professions.select.primary")}
            </h3>
            <Badge variant="coord">
              {selectedPrimary}/{MAX_PRIMARY_PROFESSIONS}
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {primary.map((profession) => (
              <ProfessionCard
                key={profession.id}
                profession={profession}
                selected={isProfessionSelected(selection, profession.id)}
                selectedIds={selectedIds}
                blocked={
                  isProfessionSelected(selection, profession.id)
                    ? null
                    : getSelectionBlock(profession, selection)
                }
                onToggle={toggleProfession}
              />
            ))}
          </div>
        </section>

        <div className="ornate-divider" />

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              {t("professions.select.secondary")}
            </h3>
            <Badge variant="coord">
              {selection.secondary.length}/{MAX_SECONDARY_PROFESSIONS}
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((profession) => (
              <ProfessionCard
                key={profession.id}
                profession={profession}
                selected={isProfessionSelected(selection, profession.id)}
                selectedIds={selectedIds}
                blocked={
                  isProfessionSelected(selection, profession.id)
                    ? null
                    : getSelectionBlock(profession, selection)
                }
                onToggle={toggleProfession}
              />
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
};