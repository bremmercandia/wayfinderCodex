import { useTranslation } from "react-i18next";
import { toLang } from "@/lib/localize";

/** Current language normalized to a game-data language (`pt-BR` or `en`). */
export const useLang = () => {
  const { i18n } = useTranslation();

  return toLang(i18n.resolvedLanguage ?? i18n.language);
};