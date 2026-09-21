import { Compass, Globe, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Badge } from "@/components/ui/badge";
import { classes } from "@/data/classes";
import { races } from "@/data/races";
import { useBlizzardSource } from "@/hooks/use-blizzard-source";
import { useCharacter } from "@/hooks/use-character";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary/15 text-primary shadow-glow"
      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
  );

export const Header = () => {
  const { t } = useTranslation();
  const { faction, raceId, classId, level, isConfigured } = useCharacter();
  const { source } = useBlizzardSource();

  const race = races.find((candidate) => candidate.id === raceId) ?? null;
  const selectedClass = classes.find((candidate) => candidate.id === classId) ?? null;

  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-primary/40 bg-gradient-leather shadow-ornate">
              <Compass className="size-5 text-primary" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-wide text-parchment">
                {t("common.appName")}
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                {t("common.appTagline")}
              </span>
            </span>
          </NavLink>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        <nav className="flex items-center gap-2" aria-label={t("common.appName")}>
          <NavLink to="/" end className={navLinkClass}>
            {t("nav.leveling")}
          </NavLink>
          <NavLink to="/professions" className={navLinkClass}>
            {t("nav.professions")}
          </NavLink>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          {isConfigured && faction ? (
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant={faction === "alliance" ? "alliance" : "horde"}>
                {faction === "alliance" ? t("common.alliance") : t("common.horde")}
              </Badge>
              <Badge variant="neutral">{race?.name}</Badge>
              <Badge variant="gold">{selectedClass?.name}</Badge>
              <Badge variant="coord">
                {t("common.level")} {level}
              </Badge>
            </div>
          ) : (
            <Badge variant="neutral" className="gap-1.5">
              <UserRound className="size-3.5" />
              {t("header.noCharacter")}
            </Badge>
          )}

          <Badge variant="neutral" className="hidden gap-1.5 sm:inline-flex">
            <Globe className="size-3.5" />
            {source === "live" ? t("header.dataLive") : t("header.dataCurated")}
          </Badge>

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};