import type { ReactNode } from "react";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";

/**
 * Shared page chrome. Each route renders its own `PageShell` so the router config
 * stays flat (`window.__routers__` keeps one entry per path).
 */
export const PageShell = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-primary/15 px-4 py-6 text-center text-[11px] text-muted-foreground sm:px-6">
        <p>{t("common.footer")}</p>
        <p className="mt-1">{t("common.footerDisclaimer")}</p>
        <a
          href="https://github.com/bremmercandia/wayfinderCodex"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium text-foreground transition-colors hover:bg-secondary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Github className="size-3.5" aria-hidden="true" />
          {t("common.repository")}
        </a>
      </footer>
    </div>
  );
};