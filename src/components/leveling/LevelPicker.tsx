import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { MAX_CHARACTER_LEVEL, MIN_CHARACTER_LEVEL, clampLevel } from "@/lib/leveling";

interface LevelPickerProps {
  value: number;
  onChange: (level: number) => void;
}

export const LevelPicker = ({ value, onChange }: LevelPickerProps) => {
  const { t } = useTranslation();
  const [draft, setDraft] = useState(String(value));
  const [invalid, setInvalid] = useState(false);

  const commit = (raw: string) => {
    const parsed = Number.parseInt(raw, 10);

    if (Number.isNaN(parsed) || parsed < MIN_CHARACTER_LEVEL || parsed > MAX_CHARACTER_LEVEL) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    onChange(clampLevel(parsed));
    setDraft(String(clampLevel(parsed)));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-end gap-3">
        <div className="w-28 space-y-1.5">
          <Label htmlFor="character-level">{t("leveling.character.level")}</Label>
          <Input
            id="character-level"
            type="number"
            inputMode="numeric"
            min={MIN_CHARACTER_LEVEL}
            max={MAX_CHARACTER_LEVEL}
            value={draft}
            aria-invalid={invalid}
            onChange={(event) => {
              setDraft(event.target.value);
              commit(event.target.value);
            }}
            onBlur={() => {
              if (invalid) {
                setDraft(String(value));
                setInvalid(false);
              }
            }}
            className="h-9"
          />
        </div>

        <div className="flex-1 pb-1">
          <Slider
            value={[value]}
            min={MIN_CHARACTER_LEVEL}
            max={MAX_CHARACTER_LEVEL}
            step={1}
            onValueChange={([next]) => {
              const level = clampLevel(next ?? MIN_CHARACTER_LEVEL);
              setDraft(String(level));
              setInvalid(false);
              onChange(level);
            }}
            aria-label={t("leveling.character.level")}
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>{MIN_CHARACTER_LEVEL}</span>
            <span>{MAX_CHARACTER_LEVEL}</span>
          </div>
        </div>
      </div>

      {invalid ? (
        <p className="text-xs text-destructive">{t("leveling.character.levelInvalid")}</p>
      ) : null}
    </div>
  );
};