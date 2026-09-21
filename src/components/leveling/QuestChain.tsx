import { ListOrdered } from "lucide-react";
import { useTranslation } from "react-i18next";
import { QuestCard } from "@/components/leveling/QuestCard";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/use-lang";
import { localize } from "@/lib/localize";
import type { QuestChainGroup } from "@/lib/leveling";

interface QuestChainProps {
  chain: QuestChainGroup;
}

/** Ordered render of a multi-step quest chain. */
export const QuestChain = ({ chain }: QuestChainProps) => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <div className="rounded-lg border border-primary/25 bg-gradient-ornate p-3">
      <header className="mb-3 flex flex-wrap items-center gap-2">
        <ListOrdered className="size-4 text-primary" />
        <h3 className="font-display text-sm font-semibold tracking-wide text-primary">
          {chain.name ? localize(chain.name, lang) : t("leveling.quests.chain")}
        </h3>
        <Badge variant="gold">
          {chain.quests.length} {t("leveling.quests.chainStep")}
        </Badge>
      </header>

      <ol className="space-y-3">
        {chain.quests.map((quest, index) => (
          <li key={quest.id} className="relative pl-8">
            <span className="absolute left-0 top-1 flex size-6 items-center justify-center rounded-full border border-primary/40 bg-background font-display text-[11px] font-bold text-primary">
              {index + 1}
            </span>
            <QuestCard quest={quest} showPrerequisites={false} />
          </li>
        ))}
      </ol>
    </div>
  );
};