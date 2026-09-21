import type { Race } from "@/types/game";

/** Playable Classic races with the classes available to each of them. */
export const races: Race[] = [
  {
    id: "human",
    name: "Human",
    faction: "alliance",
    classes: ["warrior", "paladin", "rogue", "priest", "mage", "warlock"],
  },
  {
    id: "dwarf",
    name: "Dwarf",
    faction: "alliance",
    classes: ["warrior", "paladin", "hunter", "rogue", "priest"],
  },
  {
    id: "night-elf",
    name: "Night Elf",
    faction: "alliance",
    classes: ["warrior", "hunter", "rogue", "priest", "druid"],
  },
  {
    id: "gnome",
    name: "Gnome",
    faction: "alliance",
    classes: ["warrior", "rogue", "mage", "warlock"],
  },
  {
    id: "orc",
    name: "Orc",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "shaman", "warlock"],
  },
  {
    id: "undead",
    name: "Undead",
    faction: "horde",
    classes: ["warrior", "rogue", "priest", "mage", "warlock"],
  },
  {
    id: "tauren",
    name: "Tauren",
    faction: "horde",
    classes: ["warrior", "hunter", "shaman", "druid"],
  },
  {
    id: "troll",
    name: "Troll",
    faction: "horde",
    classes: ["warrior", "hunter", "rogue", "priest", "shaman", "mage"],
  },
];