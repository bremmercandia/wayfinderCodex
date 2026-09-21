import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWayCommand, formatCoordinates } from "@/lib/wowhead";
import { cn } from "@/lib/utils";
import type { Coordinates } from "@/types/game";

const copyToClipboard = async (value: string): Promise<boolean> => {
  try {
    if (!navigator.clipboard) return false;
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
};

interface CoordCopyProps {
  coordinates: Coordinates;
  /** Optional zone name shown next to the coordinates. */
  zone?: string;
  className?: string;
}

/**
 * Coordinates plus a one-click copy of the TomTom `/way X Y` command, so the
 * player can paste the destination straight into the game.
 */
export const CoordCopy = ({ coordinates, zone, className }: CoordCopyProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const wayCommand = buildWayCommand(coordinates);

  const handleCopy = async () => {
    const success = await copyToClipboard(wayCommand);
    setCopied(success);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Badge variant="coord">{formatCoordinates(coordinates)}</Badge>
      {zone ? <span className="text-xs text-muted-foreground">{zone}</span> : null}
      <Button
        type="button"
        size="sm"
        variant="ghost"
        onClick={handleCopy}
        className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-primary"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? t("common.copied") : wayCommand}
      </Button>
    </div>
  );
};