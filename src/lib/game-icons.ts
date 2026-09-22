const WOW_ICON_BASE = "https://wow.zamimg.com/images/wow/icons/large";

const iconUrl = (name: string) => `${WOW_ICON_BASE}/${name}.jpg`;

export const factionIcons = {
  alliance: iconUrl("achievement_pvp_a_10"),
  horde: iconUrl("achievement_pvp_h_10"),
} as const;

export const raceIcons: Record<string, string> = {
  human: iconUrl("achievement_character_human_male"),
  dwarf: iconUrl("achievement_character_dwarf_male"),
  "night-elf": iconUrl("achievement_character_nightelf_male"),
  gnome: iconUrl("achievement_character_gnome_male"),
  orc: iconUrl("achievement_character_orc_male"),
  undead: iconUrl("achievement_character_undead_male"),
  tauren: iconUrl("achievement_character_tauren_male"),
  troll: iconUrl("achievement_character_troll_male"),
};

export const classIcons: Record<string, string> = {
  warrior: iconUrl("ability_warrior_defensivestance"),
  paladin: iconUrl("spell_holy_devotion"),
  hunter: iconUrl("ability_hunter_beastcall"),
  rogue: iconUrl("ability_stealth"),
  priest: iconUrl("spell_holy_powerwordshield"),
  shaman: iconUrl("spell_nature_stoneskintotem"),
  mage: iconUrl("spell_frost_frostbolt02"),
  warlock: iconUrl("spell_shadow_shadowbolt"),
  druid: iconUrl("ability_druid_catform"),
};

export const professionIcons: Record<string, string> = {
  alchemy: iconUrl("trade_alchemy"),
  blacksmithing: iconUrl("trade_blacksmithing"),
  enchanting: iconUrl("trade_engraving"),
  engineering: iconUrl("trade_engineering"),
  herbalism: iconUrl("spell_nature_naturetouchgrow"),
  leatherworking: iconUrl("trade_leatherworking"),
  mining: iconUrl("trade_mining"),
  skinning: iconUrl("inv_misc_pelt_bear_03"),
  tailoring: iconUrl("trade_tailoring"),
  cooking: iconUrl("inv_misc_food_15"),
  fishing: iconUrl("trade_fishing"),
  "first-aid": iconUrl("spell_holy_holynova"),
};
