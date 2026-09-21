import { ScrollText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CoordCopy } from "@/components/wowhead/CoordCopy";
import { WowheadLink } from "@/components/wowhead/WowheadLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClassCrest } from "@/components/leveling/ClassCrest";
import { classTips } from "@/data/classesTips";
import { useLang } from "@/hooks/use-lang";
import { useWowheadTooltips } from "@/hooks/use-wowhead-tooltips";
import { localize } from "@/lib/localize";
import type { WowClassId } from "@/types/game";

interface ClassTipsProps {
  classId: WowClassId;
  level: number;
  className?: string;
}

/** Class milestones (stances, forms, pets, totems, poisons, mounts) up to the level. */
export const ClassTips = ({ classId, level, className }: ClassTipsProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const tips = classTips
    .filter((tip) => tip.classId === classId && tip.level <= level + 2)
    .sort((left, right) => left.level - right.level);

  useWowheadTooltips(`class-tips-${classId}-${level}-${lang}`);

  if (tips.length === 0) {
    return (
      <Card variant="panel" className={className}>
        <CardContent className="pt-5 text-xs text-muted-foreground">
          {t("leveling.classTips.empty")}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="ornate" className={className}>
      <CardHeader className="gap-2">
        <CardTitle className="inline-flex items-center gap-2 gold-text">
          <ScrollText className="size-4" />
          {t("leveling.classTips.title")}
        </CardTitle>
        <CardDescription>{t("leveling.classTips.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {tips.map((tip) => (
          <article
            key={tip.id}
            className="rounded-md border border-border/70 bg-secondary/30 p-3 transition-colors hover:border-primary/30"
          >
            <header className="flex flex-wrap items-center gap-2">
              <ClassCrest classId={classId} label={String(tip.level)} />
              <h3 className="font-display text-sm font-semibold tracking-wide text-parchment">
                {localize(tip.title, lang)}
              </h3>
              <Badge variant="coord">
                {t("common.level")} {tip.level}
              </Badge>
            </header>

            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              {localize(tip.description, lang)}
            </p>

            {tip.questName ? (
              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">{t("common.npc")}:</span>{" "}
                <WowheadLink
                  type="quest"
                  name={tip.questName}
                  wowheadId={tip.questWowheadId}
                  className="text-xs"
                />
                {tip.npc ? ` · ${tip.npc}` : ""}
                {tip.zone ? ` · ${tip.zone}` : ""}
              </p>
            ) : null}

            {tip.coordinates ? (
              <div className="mt-2">
                <CoordCopy coordinates={tip.coordinates} />
              </div>
            ) : null}
          </article>
        ))}
      </CardContent>
    </Card>
  );
};