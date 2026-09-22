import { useState } from "react";
import { cn } from "@/lib/utils";

type GameIconProps = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

export const GameIcon = ({ src, alt, fallback, className }: GameIconProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-label={alt}
        className={cn(
          "flex items-center justify-center rounded-sm font-display text-[10px] font-bold uppercase",
          className,
        )}
      >
        {fallback}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("rounded-sm object-cover", className)}
    />
  );
};
