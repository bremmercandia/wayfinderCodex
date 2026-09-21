import type { Lang, Localized } from "@/types/game";
import { fallbackLng, normalizeLanguage } from "@/i18n/util";

/** Normalizes any i18n language value to a supported game-data language. */
export const toLang = (value?: string | null): Lang =>
  (normalizeLanguage(value) ?? fallbackLng) === "pt-BR" ? "pt-BR" : "en";

/** Resolves a localized data field, falling back to English. */
export const localize = (value: Localized | undefined, lang: Lang): string => {
  if (!value) return "";
  return value[lang] ?? value.en;
};

/** Resolves a list of localized data fields. */
export const localizeList = (values: Localized[] | undefined, lang: Lang): string[] =>
  (values ?? []).map((value) => localize(value, lang)).filter(Boolean);