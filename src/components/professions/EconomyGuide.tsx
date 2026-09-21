import type { ReactNode } from "react";
import { Coins, PackageCheck, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/hooks/use-lang";
import { localizeList } from "@/lib/localize";
import type { Profession } from "@/types/game";

interface EconomyGuideProps {
  profession: Profession;
}

const Column = ({
  icon,
  title,
  items,
  accent,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  accent: string;
}) => (
  <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
    <h4 className={`mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${accent}`}>
      {icon}
      {title}
    </h4>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-xs text-muted-foreground">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** What to sell on the Auction House, disenchant or hoard. */
export const EconomyGuide = ({ profession }: EconomyGuideProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  const sell = localizeList(profession.economy.sell, lang);
  const keep = localizeList(profession.economy.keep, lang);
  const disenchant = localizeList(profession.economy.disenchant, lang);

  return (
    <Card variant="panel">
      <CardHeader className="gap-1.5">
        <CardTitle className="inline-flex items-center gap-2 text-base">
          <Coins className="size-4 text-primary" />
          {t("professions.economy.title")}
        </CardTitle>
        <CardDescription>{profession.name}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-3 md:grid-cols-3">
        <Column
          icon={<Coins className="size-3.5" />}
          title={t("professions.economy.sell")}
          items={sell}
          accent="text-rarity-rare"
        />
        {disenchant.length > 0 ? (
          <Column
            icon={<Sparkles className="size-3.5" />}
            title={t("professions.economy.disenchant")}
            items={disenchant}
            accent="text-rarity-epic"
          />
        ) : null}
        <Column
          icon={<PackageCheck className="size-3.5" />}
          title={t("professions.economy.keep")}
          items={keep}
          accent="text-rarity-uncommon"
        />
      </CardContent>
    </Card>
  );
};