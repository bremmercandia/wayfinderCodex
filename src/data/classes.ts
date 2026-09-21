import type { WowClass } from "@/types/game";

/** The nine Classic classes, each one themed with its traditional colour token. */
export const classes: WowClass[] = [
  {
    id: "warrior",
    name: "Warrior",
    roles: { "pt-BR": "Tanque / dano corpo a corpo", en: "Tank / melee damage" },
    blurb: {
      "pt-BR": "Depende de grupo nas dungeons desde o nível 20. Priorize armas e armaduras de placa aos 40.",
      en: "Depends on groups for dungeons from level 20 onwards. Prioritise weapons and plate armor at 40.",
    },
  },
  {
    id: "paladin",
    name: "Paladin",
    roles: { "pt-BR": "Tanque / healer / suporte", en: "Tank / healer / support" },
    blurb: {
      "pt-BR": "Excelente solo por causa das auras e heals. A quest do mount no 40 economiza muito gold.",
      en: "Excellent solo thanks to auras and heals. The level 40 mount quest saves a lot of gold.",
    },
  },
  {
    id: "hunter",
    name: "Hunter",
    roles: { "pt-BR": "Dano à distância", en: "Ranged damage" },
    blurb: {
      "pt-BR": "A classe mais rápida em solo. Pet certo por faixa de nível vale mais que qualquer item.",
      en: "The fastest solo class. The right pet per level bracket is worth more than any item.",
    },
  },
  {
    id: "rogue",
    name: "Rogue",
    roles: { "pt-BR": "Dano corpo a corpo", en: "Melee damage" },
    blurb: {
      "pt-BR": "Solo forte com stealth e venenos. Lockpicking abre portas e baús que o grupo precisa.",
      en: "Strong solo with stealth and poisons. Lockpicking opens doors and chests the group needs.",
    },
  },
  {
    id: "priest",
    name: "Priest",
    roles: { "pt-BR": "Healer / dano (Shadow)", en: "Healer / damage (Shadow)" },
    blurb: {
      "pt-BR": "Shadow até o 40 e depois healer de dungeon: o melhor sustain de mana do jogo.",
      en: "Shadow up to 40, then dungeon healer: the best mana sustain in the game.",
    },
  },
  {
    id: "shaman",
    name: "Shaman",
    roles: { "pt-BR": "Healer / dano / suporte", en: "Healer / damage / support" },
    blurb: {
      "pt-BR": "Totens dão dano passivo e buff de grupo. Windfury Totem é a razão pela qual melee te adora.",
      en: "Totems give passive damage and group buffs. Windfury Totem is why melee players love you.",
    },
  },
  {
    id: "mage",
    name: "Mage",
    roles: { "pt-BR": "Dano à distância / utilidade", en: "Ranged damage / utility" },
    blurb: {
      "pt-BR": "Conjure Water e portais pagam o seu mount. Polymorph é obrigatório em qualquer grupo.",
      en: "Conjure Water and portals pay for your mount. Polymorph is mandatory in any group.",
    },
  },
  {
    id: "warlock",
    name: "Warlock",
    roles: { "pt-BR": "Dano com DoT / invocador", en: "DoT damage / summoner" },
    blurb: {
      "pt-BR": "Pets, healthstones e soulstones. A melhor classe para farmar elites sozinho.",
      en: "Pets, healthstones and soulstones. The best class for farming elites solo.",
    },
  },
  {
    id: "druid",
    name: "Druid",
    roles: { "pt-BR": "Tanque / healer / dano", en: "Tank / healer / damage" },
    blurb: {
      "pt-BR": "Formas eliminam tempo de caminhada e o deslocamento é parte do leveling.",
      en: "Forms remove travel time and movement is part of leveling.",
    },
  },
];