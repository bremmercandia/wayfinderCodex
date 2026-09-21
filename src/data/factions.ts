import type { Faction } from "@/types/game";

export const factions: Faction[] = [
  {
    id: "alliance",
    name: "Alliance",
    tagline: { "pt-BR": "Stormwind, Ironforge, Darnassus", en: "Stormwind, Ironforge, Darnassus" },
    description: {
      "pt-BR": "Leveling com quests de Westfall, Redridge, Duskwood e Wetlands, e as dungeons exclusivas Deadmines e The Stockade.",
      en: "Leveling through Westfall, Redridge, Duskwood and Wetlands quests, plus the exclusive Deadmines and The Stockade dungeons.",
    },
  },
  {
    id: "horde",
    name: "Horde",
    tagline: { "pt-BR": "Orgrimmar, Undercity, Thunder Bluff", en: "Orgrimmar, Undercity, Thunder Bluff" },
    description: {
      "pt-BR": "Leveling com quests de The Barrens, Tirisfal, Silverpine e Stonetalon, e a dungeon exclusiva Ragefire Chasm.",
      en: "Leveling through The Barrens, Tirisfal, Silverpine and Stonetalon quests, plus the exclusive Ragefire Chasm dungeon.",
    },
  },
];