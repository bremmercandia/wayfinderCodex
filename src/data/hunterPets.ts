import type { HunterPet } from "@/types/game";

/**
 * Best Hunter pets per level bracket with the zone and coordinates to tame them.
 * Coordinates use the Wowhead 0-100 map scale.
 */
export const hunterPets: HunterPet[] = [
  {
    id: "the-rake",
    name: "The Rake",
    family: "Cat",
    levelRange: { min: 10, max: 10 },
    zone: "Mulgore",
    coordinates: { x: 47.0, y: 60.0 },
    reason: {
      "pt-BR": "Gato raro de nível 10 com ataque rápido: o padrão dos pets de início de jogo para dano sustentado.",
      en: "Rare level 10 cat with a fast attack: the standard early-game pet for sustained damage.",
    },
    notes: {
      "pt-BR": "Rare spawn com respawn de várias horas. Alternativa fácil: qualquer gato de Mulgore ou Durotar.",
      en: "Rare spawn with a multi-hour respawn timer. Easy alternative: any Mulgore or Durotar cat.",
    },
  },
  {
    id: "bjarn",
    name: "Bjarn",
    family: "Bear",
    levelRange: { min: 12, max: 12 },
    zone: "Dun Morogh",
    coordinates: { x: 47.0, y: 52.0 },
    reason: {
      "pt-BR": "Urso raro de nível baixo com muita vida: aguenta pulls grandes enquanto você atira de longe.",
      en: "Low-level rare bear with a big health pool: it holds large pulls while you shoot from range.",
    },
    notes: {
      "pt-BR": "Come carne e peixe. Ótimo segundo pet para fases de AoE aberto.",
      en: "Eats meat and fish. A great second pet for open-field AoE phases.",
    },
  },
  {
    id: "takk-the-leaper",
    name: "Takk the Leaper",
    family: "Raptor",
    levelRange: { min: 19, max: 19 },
    zone: "The Barrens",
    coordinates: { x: 52.0, y: 32.0 },
    reason: {
      "pt-BR": "Raptor raro com bom dano por ataque: bom pet de PvP até a faixa 30.",
      en: "Rare raptor with strong per-hit damage: a good PvP pet up to level 30.",
    },
    notes: {
      "pt-BR": "Rare spawn rápido (1-2h). Requer nível 19 para domar.",
      en: "Fast rare spawn (1-2h). Requires level 19 to tame.",
    },
  },
  {
    id: "death-flayer",
    name: "Death Flayer",
    family: "Scorpid",
    levelRange: { min: 18, max: 18 },
    zone: "Durotar",
    coordinates: { x: 48.0, y: 40.0 },
    reason: {
      "pt-BR": "Escorpião raro com ataque rápido: gera foco rápido e ganha dos gatos no nível baixo.",
      en: "Rare fast scorpion: generates focus quickly and outpaces cats at low level.",
    },
    notes: {
      "pt-BR": "Come carne. Bom pet para quem quer dano consistente sem depender de raro raro.",
      en: "Eats meat. A good pet if you want consistent damage without chasing rare spawns.",
    },
  },
  {
    id: "vultros",
    name: "Vultros",
    family: "Carrion Bird",
    levelRange: { min: 18, max: 22 },
    zone: "Westfall",
    coordinates: { x: 42.0, y: 62.0 },
    reason: {
      "pt-BR": "Carrion bird com debuff de armadura: aumenta o dano de todo o grupo de melee.",
      en: "Carrion bird with an armor debuff: it raises the damage of the whole melee group.",
    },
    notes: {
      "pt-BR": "Rare spawn. Come carne. Excelente escolha se você joga em grupo desde cedo.",
      en: "Rare spawn. Eats meat. An excellent pick if you group up early.",
    },
  },
  {
    id: "naraxis",
    name: "Naraxis",
    family: "Spider",
    levelRange: { min: 20, max: 21 },
    zone: "Duskwood",
    coordinates: { x: 40.0, y: 75.0 },
    reason: {
      "pt-BR": "Aranha rara com veneno: dano extra em mobs de elite e bom pet de leveling noturno.",
      en: "Rare spider with poison: extra damage on elite mobs and a strong night-time leveling pet.",
    },
    notes: {
      "pt-BR": "Come carne. Veneno ajuda a matar mobs de elite sem gastar mana.",
      en: "Eats meat. The poison helps kill elite mobs without burning mana.",
    },
  },
  {
    id: "humar-the-pridelord",
    name: "Humar the Pridelord",
    family: "Cat",
    levelRange: { min: 23, max: 23 },
    zone: "The Barrens",
    coordinates: { x: 39.0, y: 15.0 },
    reason: {
      "pt-BR": "O gato preto mais famoso do Classic: ataque rápido e ótimo dano na faixa 23-40.",
      en: "The most famous black cat in Classic: fast attack and great damage in the 23-40 band.",
    },
    notes: {
      "pt-BR": "Rare spawn longo (4-6h), muito campado. Alternativa: qualquer gato de nível 23 dos Barrens.",
      en: "Long rare spawn (4-6h), heavily camped. Alternative: any level 23 Barrens cat.",
    },
  },
  {
    id: "lupos",
    name: "Lupos",
    family: "Wolf",
    levelRange: { min: 23, max: 23 },
    zone: "Duskwood",
    coordinates: { x: 21.0, y: 60.0 },
    reason: {
      "pt-BR": "Lobo raro lendário do Classic: dano de sombra em vez de físico, ignorando armaduras altas.",
      en: "Classic's legendary rare wolf: shadow damage instead of physical, bypassing high armor.",
    },
    notes: {
      "pt-BR": "Rare spawn com fila de camper. Se estiver impossível, use qualquer lobo de nível semelhante.",
      en: "Rare spawn with a camper queue. If it is hopeless, use any wolf of a similar level.",
    },
  },
  {
    id: "bellygrub",
    name: "Bellygrub",
    family: "Boar",
    levelRange: { min: 26, max: 26 },
    zone: "Redridge Mountains",
    coordinates: { x: 26.0, y: 52.0 },
    reason: {
      "pt-BR": "Javali raro com Charge: pet tanque por excelência, ótimo para puxar em dungeons.",
      en: "Rare boar with Charge: the tank pet par excellence, great for dungeon pulls.",
    },
    notes: {
      "pt-BR": "Rare spawn de respawn curto. Come quase tudo, o que facilita a felicidade.",
      en: "Rare spawn with a short timer. Eats almost anything, which keeps happiness easy.",
    },
  },
  {
    id: "broken-tooth",
    name: "Broken Tooth",
    family: "Cat",
    levelRange: { min: 37, max: 37 },
    zone: "Badlands",
    coordinates: { x: 32.0, y: 36.0 },
    reason: {
      "pt-BR": "O pet de dano definitivo: ataque de 1.0 segundo, o mais rápido que um Hunter pode domar.",
      en: "The definitive damage pet: a 1.0 second attack speed, the fastest a Hunter can tame.",
    },
    notes: {
      "pt-BR": "Rare spawn de 4-6h, disputadíssimo. Vale acampar: é o melhor pet de PvP do Classic.",
      en: "A 4-6h rare spawn, heavily contested. Worth camping: it is Classic's best PvP pet.",
    },
  },
  {
    id: "king-bangalash",
    name: "King Bangalash",
    family: "Cat",
    levelRange: { min: 43, max: 43 },
    zone: "Stranglethorn Vale",
    coordinates: { x: 38.0, y: 47.0 },
    reason: {
      "pt-BR": "Tigre elite que também é o pet de dano mais fácil de conseguir na faixa 40-50.",
      en: "Elite tiger that doubles as the easiest big damage pet to get in the 40-50 band.",
    },
    notes: {
      "pt-BR": "Elite de nível 43: leve poções, você precisa sobreviver ao tame. Respaws rápidos.",
      en: "Level 43 elite: bring potions, you must survive the tame. Respawns quickly.",
    },
  },
  {
    id: "snarler",
    name: "Snarler",
    family: "Wolf",
    levelRange: { min: 48, max: 48 },
    zone: "Feralas",
    coordinates: { x: 60.0, y: 30.0 },
    reason: {
      "pt-BR": "Lobo elite raro com resistências embutidas: aguenta mobs de nível 50+ melhor que qualquer gato.",
      en: "Rare elite wolf with built-in resistances: it tanks level 50+ mobs better than any cat.",
    },
    notes: {
      "pt-BR": "Elite raro em Feralas; respawn de 4-8h. Traga um amigo para curar durante o tame.",
      en: "Rare elite in Feralas; 4-8h respawn. Bring a friend to heal during the tame.",
    },
  },
  {
    id: "rakshiri",
    name: "Rak'shiri",
    family: "Cat",
    levelRange: { min: 57, max: 57 },
    zone: "Winterspring",
    coordinates: { x: 51.0, y: 10.0 },
    reason: {
      "pt-BR": "Gato raro de nível 57 com ataque rápido: o melhor pet de dano do endgame.",
      en: "Rare level 57 cat with a fast attack: the best endgame damage pet.",
    },
    notes: {
      "pt-BR": "Rare spawn de 6-8h. Alternativa mais fácil: gatos de Winterspring no mesmo nível.",
      en: "A 6-8h rare spawn. Easier alternative: Winterspring cats of the same level.",
    },
  },
  {
    id: "sian-rotam",
    name: "Sian-Rotam",
    family: "Cat",
    levelRange: { min: 60, max: 60 },
    zone: "Winterspring",
    coordinates: { x: 46.0, y: 17.0 },
    reason: {
      "pt-BR": "Gato elite de nível 60: o pet de PvP final, com dano e vida de raid.",
      en: "Level 60 elite cat: the final PvP pet, with raid-level damage and health.",
    },
    notes: {
      "pt-BR": "Invocado por uma cadeia de quest em Winterspring; leve um healer em nível 60.",
      en: "Summoned through a Winterspring quest chain; bring a healer at level 60.",
    },
  },
];