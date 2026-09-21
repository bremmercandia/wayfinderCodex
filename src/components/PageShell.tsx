import type { ReactNode } from "react";
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
        {t("common.footer")}
      </footer>
    </div>
  );
};