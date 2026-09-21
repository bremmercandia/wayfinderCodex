import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Compass } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageShell>
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="ornate-frame w-full max-w-md p-8 text-center">
          <Compass className="mx-auto size-10 text-primary" />
          <h1 className="mt-4 font-display text-4xl font-bold text-parchment">404</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("notFound.title")}</p>
          <Button asChild variant="premium" className="mt-6">
            <Link to="/">{t("notFound.actions.backHome")}</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  );
};

export default NotFound;