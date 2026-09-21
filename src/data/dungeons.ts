import type { Dungeon } from "@/types/game";

/**
 * Curated Classic (1.12) dungeon list with level ranges per wing, faction
 * availability, outdoor entrance coordinates and leveling tips.
 *
 * Coordinates use the Wowhead 0-100 map scale and feed the `/way X Y` TomTom
 * command rendered by `buildWayCommand()`. `wowheadId` is intentionally omitted
 * where an id could not be verified: `WowheadLink` then falls back to a Wowhead
 * search link instead of showing a wrong tooltip.
 */
export const dungeons: Dungeon[] = [
  {
    id: "rfc",
    name: "Ragefire Chasm",
    levelRange: { min: 13, max: 18 },
    faction: "horde",
    zone: "Orgrimmar",
    entrance: {
      zone: "Orgrimmar",
      coordinates: { x: 51.6, y: 49.9 },
      notes: {
        "pt-BR": "Entrada dentro de Orgrimmar, atrás do Cleft of Shadow. Só a Horda tem acesso.",
        en: "Entrance inside Orgrimmar, behind the Cleft of Shadow. Horde only.",
      },
    },
    summary: {
      "pt-BR":
        "A primeira dungeon de qualquer personagem da Horda: dois níveis curtos de troggs e sectários do Burning Blade, com elites de nível 13 a 16.",
      en: "The first dungeon for any Horde character: two short levels of troggs and Burning Blade cultists with level 13-16 elites.",
    },
    tips: [
      {
        "pt-BR": "Funciona até em dupla ou trio; uma boa fonte de XP limpa entre os níveis 13 e 18.",
        en: "Works well with two or three players; clean XP between levels 13 and 18.",
      },
      {
        "pt-BR": "A quest de classe do Warlock (o Voidwalker) passa por aqui - combine com a run de XP.",
        en: "The Warlock class quest for the Voidwalker passes through here - combine it with the XP run.",
      },
      {
        "pt-BR": "Guarde os drops para a cadeia de quests do Neeru Fireblade em Orgrimmar.",
        en: "Keep the drops for the Neeru Fireblade quest line in Orgrimmar.",
      },
    ],
    groupNote: {
      "pt-BR": "Grupo de 2 a 5, sem requisito de nível para entrar.",
      en: "Group of 2-5, no level requirement to enter.",
    },
  },
  {
    id: "wc",
    name: "Wailing Caverns",
    levelRange: { min: 17, max: 24 },
    faction: "both",
    zone: "The Barrens",
    entrance: {
      zone: "The Barrens",
      coordinates: { x: 46.0, y: 36.0 },
      notes: {
        "pt-BR": "Caverna no centro-sul de The Barrens. A entrada não exige quest.",
        en: "Cave in south-central The Barrens. The entrance needs no quest.",
      },
    },
    summary: {
      "pt-BR":
        "Labirinto de cavernas druídicas com raptors, oásis e o primeiro grande chefe do jogo, Mutanus the Devourer, disponível para as duas facções.",
      en: "A druidic cave maze of raptors, oases and the game's first big boss, Mutanus the Devourer, open to both factions.",
    },
    tips: [
      {
        "pt-BR": "Faça a cadeia do Fang primeiro (Naralex em Crossroads) e a quest de escort para maximizar o XP.",
        en: "Do the Fang chain first (Naralex in Crossroads) plus the escort quest to maximise XP.",
      },
      {
        "pt-BR": "A dungeon é longa: leve comida, água e foco em limpar sem puxar dois grupos por vez.",
        en: "The dungeon is long: bring food, water and clear without pulling two packs at once.",
      },
      {
        "pt-BR": "Leve um skinner para aproveitar os raptors; Deviate Hide vale bem na AH.",
        en: "Bring a skinner to profit from the raptors; Deviate Hide sells well on the Auction House.",
      },
      {
        "pt-BR": "As peças do set de Deviate Hide caem dos chefes com boa chance.",
        en: "The Deviate Hide set pieces drop from the bosses with a good chance.",
      },
    ],
  },
  {
    id: "deadmines",
    name: "The Deadmines",
    levelRange: { min: 17, max: 26 },
    faction: "alliance",
    zone: "Westfall",
    entrance: {
      zone: "Westfall",
      coordinates: { x: 42.0, y: 70.0 },
      notes: {
        "pt-BR": "Entrada pela Moonbrook, no sul de Westfall. Apenas Alliance.",
        en: "Entrance through Moonbrook in southern Westfall. Alliance only.",
      },
    },
    summary: {
      "pt-BR":
        "A dungeon clássica da Alliance: minas tomadas pela Defias Brotherhood, culminando em Edwin VanCleef no navio pirata.",
      en: "The Alliance classic: mines overrun by the Defias Brotherhood, climaxing with Edwin VanCleef on the pirate ship.",
    },
    tips: [
      {
        "pt-BR": "Todo personagem da Alliance deveria fazer a cadeia de Westfall antes; as quests valem ouro e um bom drop.",
        en: "Every Alliance character should finish the Westfall chain first; the quests pay gold and a solid drop.",
      },
      {
        "pt-BR": "O final com VanCleef exige a cabeça dele para a quest principal - não saia sem pegar o corpo.",
        en: "The VanCleef finale needs his head for the main quest - do not leave without looting the corpse.",
      },
      {
        "pt-BR": "A dungeon mistura patrulhas nas minas: use os trilhos e limpe os grupos de 2-3 mobs.",
        en: "The dungeon mixes patrols in the mines: use the rails and clear the 2-3 mob packs.",
      },
    ],
    groupNote: {
      "pt-BR": "Grupo de 3 a 5 funciona bem; a quest final pede o chefe completo.",
      en: "A group of 3-5 works well; the final quest requires the last boss.",
    },
  },
  {
    id: "sfk",
    name: "Shadowfang Keep",
    levelRange: { min: 22, max: 30 },
    faction: "both",
    zone: "Silverpine Forest",
    entrance: {
      zone: "Silverpine Forest",
      coordinates: { x: 45.0, y: 67.0 },
      notes: {
        "pt-BR": "Castelo no extremo sul de Silverpine Forest, acessível pelas duas facções pela linha de Undercity.",
        en: "Castle at the southern tip of Silverpine Forest, reachable by both factions via the Undercity route.",
      },
    },
    summary: {
      "pt-BR":
        "Masmorra compacta em volta do forte worgen: linha direta de chefes, ótima densidade de mobs e um dos melhores drops do jogo nessa faixa.",
      en: "A compact worgen keep: a straight line of bosses, great mob density and one of the best loot tables in that level band.",
    },
    tips: [
      {
        "pt-BR": "Ir direto até Arugal é rápido, mas vale matar tudo: a XP por hora é excelente até o nível 30.",
        en: "Rushing to Arugal is fast, but killing everything pays off: XP per hour is excellent up to level 30.",
      },
      {
        "pt-BR": "Warlocks e Paladins têm quests de classe aqui - confira o log antes de entrar.",
        en: "Warlocks and Paladins have class quests here - check your log before entering.",
      },
      {
        "pt-BR": "Arugal usa buffs e invoca adds: mantenha o foco no chefe e evite puxadas grandes.",
        en: "Arugal buffs and summons adds: stay on the boss and avoid overpulling.",
      },
    ],
  },
  {
    id: "bfd",
    name: "Blackfathom Deeps",
    levelRange: { min: 24, max: 32 },
    faction: "both",
    zone: "Ashenvale",
    entrance: {
      zone: "Ashenvale",
      coordinates: { x: 14.0, y: 15.0 },
      notes: {
        "pt-BR": "Entrada na costa noroeste de Ashenvale. A quest de escort do Aku'mai vem de Auberdine.",
        en: "Entrance on the north-west coast of Ashenvale. The Aku'mai escort quest starts in Auberdine.",
      },
    },
    summary: {
      "pt-BR":
        "Ruínas naga e cultistas do Twilight's Hammer submersas em um templo antigo, com três alas e boa variedade de quests para os dois lados.",
      en: "Sunken naga ruins and Twilight's Hammer cultists in an ancient temple, with three wings and a solid quest set for both sides.",
    },
    tips: [
      {
        "pt-BR": "As quests de Auberdine e Astranaar cobrem quase toda a dungeon - colete tudo antes de entrar.",
        en: "The Auberdine and Astranaar quests cover most of the dungeon - collect them all before entering.",
      },
      {
        "pt-BR": "Vale muito como ponte de XP entre os níveis 24 e 32, com drops de caster interessantes.",
        en: "Great XP bridge between levels 24 and 32, with appealing caster drops.",
      },
      {
        "pt-BR": "O caminho pela água deixa você passar direto para a última ala; evite puxar os naga no meio.",
        en: "The water path lets you skip straight to the last wing; avoid pulling the intermediate naga.",
      },
    ],
  },
  {
    id: "stockade",
    name: "The Stockade",
    levelRange: { min: 24, max: 32 },
    faction: "alliance",
    zone: "Stormwind City",
    entrance: {
      zone: "Stormwind City",
      coordinates: { x: 40.0, y: 57.0 },
      notes: {
        "pt-BR": "Entrada na parte norte da cidade de Stormwind, junto ao canal. Apenas Alliance.",
        en: "Entrance in the northern part of Stormwind City, by the canal. Alliance only.",
      },
    },
    summary: {
      "pt-BR":
        "Prisão de Stormwind tomada pela Defias: uma das runs mais curtas do jogo, com boa variedade de armaduras.",
      en: "Stormwind's prison overrun by the Defias: one of the shortest runs in the game, with a good spread of armor.",
    },
    tips: [
      {
        "pt-BR": "Dungeon curta e repetível: ideal para runs rápidas de XP e para a quest do The People's Militia.",
        en: "Short and repeatable: ideal for quick XP runs and the People's Militia quest.",
      },
      {
        "pt-BR": "As quests da cadeia Defias de Stormwind valem ser feitas no mesmo dia.",
        en: "The Stormwind Defias chain is worth finishing on the same day.",
      },
      {
        "pt-BR": "Ótimo para treinar um healer novo: puxadas pequenas e poucos patrols.",
        en: "Great place to learn healing: small pulls and few patrols.",
      },
    ],
  },
  {
    id: "gnomeregan",
    name: "Gnomeregan",
    levelRange: { min: 29, max: 38 },
    faction: "both",
    zone: "Dun Morogh",
    entrance: {
      zone: "Dun Morogh",
      coordinates: { x: 24.0, y: 39.0 },
      notes: {
        "pt-BR": "Entrada em Dun Morogh, no portão leste de Gnomeregan. Não exige attunement.",
        en: "Entrance in Dun Morogh at the eastern gate of Gnomeregan. No attunement required.",
      },
    },
    summary: {
      "pt-BR":
        "Cidade gnômica radiativa tomada por leper gnomes e troggs, com bastante quest para os dois lados e layout dividido em setores.",
      en: "Radioactive gnomish city overrun by leper gnomes and troggs, with a solid quest set and a sector-based layout.",
    },
    tips: [
      {
        "pt-BR": "As quests de Ironforge e Darnassus dão boa XP extra para quem pegar antes de entrar.",
        en: "The Ironforge and Darnassus quests give good extra XP if you pick them up first.",
      },
      {
        "pt-BR": "Cuidado com os alarmes e o Thermaplugg: leve bandagens e paciência com o labirinto.",
        en: "Watch the alarms and Thermaplugg: bring bandages and patience with the maze.",
      },
      {
        "pt-BR": "Guarde o Grime-Encrusted Ring intacto para a quest de acompanhamento.",
        en: "Keep the Grime-Encrusted Ring intact for the follow-up quest.",
      },
    ],
  },
  {
    id: "rfk",
    name: "Razorfen Kraul",
    levelRange: { min: 24, max: 32 },
    faction: "both",
    zone: "The Barrens",
    entrance: {
      zone: "The Barrens",
      coordinates: { x: 44.0, y: 25.0 },
      notes: {
        "pt-BR": "Entrada no sul de The Barrens, perto da fronteira com Thousand Needles.",
        en: "Entrance in southern The Barrens near the Thousand Needles border.",
      },
    },
    summary: {
      "pt-BR":
        "Túneis de quilboars com puzzles de portões e a chefe Charlga Razorflank; um clássico da faixa 30 para os dois lados.",
      en: "Quilboar warrens with gate puzzles and Charlga Razorflank; a level-30 staple for both factions.",
    },
    tips: [
      {
        "pt-BR": "As quests vêm de Ratchet, Camp Taurajo e The Barrens - pegue todas antes de viajar.",
        en: "The quests come from Ratchet, Camp Taurajo and The Barrens - gather them all before travelling.",
      },
      {
        "pt-BR": "O layout permite pular uma ala; combine com a escort do Willix the Inforcer.",
        en: "The layout lets you skip a wing; combine it with the Willix the Inforcer escort.",
      },
      {
        "pt-BR": "Bom para XP na faixa 30-40 e para montar um grupo fixo que vai junto ao RFD.",
        en: "Good XP in the 30-40 band and a natural place to build the group that will run RFD.",
      },
    ],
  },
  {
    id: "sm-graveyard",
    name: "Scarlet Monastery",
    wing: "Graveyard",
    levelRange: { min: 28, max: 38 },
    faction: "both",
    zone: "Tirisfal Glades",
    entrance: {
      zone: "Tirisfal Glades",
      coordinates: { x: 83.0, y: 33.0 },
      notes: {
        "pt-BR": "Entre pelo portão principal do mosteiro; a ala Graveyard fica à esquerda.",
        en: "Enter through the monastery's main gate; the Graveyard wing is on the left.",
      },
    },
    summary: {
      "pt-BR":
        "A menor das alas do Scarlet Monastery: poucos pulls, Bloodmage Thalnos e quests fáceis de pegar em Undercity e Southshore.",
      en: "The smallest Scarlet Monastery wing: a handful of pulls, Bloodmage Thalnos and easy quests from Undercity and Southshore.",
    },
    tips: [
      {
        "pt-BR": "Perfeita como primeira run do mosteiro: rápida e com XP honesta entre 28 e 38.",
        en: "Perfect first monastery run: quick with honest XP between 28 and 38.",
      },
      {
        "pt-BR": "As quests do Scarlet Monastery começam fora da dungeon, em Undercity e Southshore.",
        en: "The Scarlet Monastery quests start outside the dungeon, in Undercity and Southshore.",
      },
      {
        "pt-BR": "Itens vermelhos da Scarlet Crusade não dão reputação útil: venda para vendor.",
        en: "Scarlet Crusade red items give no useful reputation: vendor them.",
      },
    ],
  },
  {
    id: "sm-library",
    name: "Scarlet Monastery",
    wing: "Library",
    levelRange: { min: 32, max: 42 },
    faction: "both",
    zone: "Tirisfal Glades",
    entrance: {
      zone: "Tirisfal Glades",
      coordinates: { x: 82.0, y: 33.0 },
      notes: {
        "pt-BR": "Entrada à direita do portão principal. Nenhuma chave é necessária para entrar.",
        en: "Entrance on the right of the main gate. No key is required to enter.",
      },
    },
    summary: {
      "pt-BR":
        "Biblioteca da Scarlet Crusade com Doan e sua mala de tesouros, famosa pelo Illusionary Rod e pelo farm de XP rápido.",
      en: "The Scarlet Crusade library with Doan and his treasure chest, famous for the Illusionary Rod and fast XP runs.",
    },
    tips: [
      {
        "pt-BR": "Abra a Doan's Strongbox com um rogue para drops extras e boa chance de itens azuis.",
        en: "Open Doan's Strongbox with a rogue for extra loot and a good chance of blue items.",
      },
      {
        "pt-BR": "Ala curta e densa: excelente para XP na faixa 32-42.",
        en: "Short and dense: excellent XP in the 32-42 band.",
      },
      {
        "pt-BR": "O Illusionary Rod é um dos melhores cajados de leveling do jogo até o 40.",
        en: "The Illusionary Rod is one of the best leveling staves in the game up to 40.",
      },
    ],
  },
  {
    id: "sm-armory",
    name: "Scarlet Monastery",
    wing: "Armory",
    levelRange: { min: 36, max: 46 },
    faction: "both",
    zone: "Tirisfal Glades",
    entrance: {
      zone: "Tirisfal Glades",
      coordinates: { x: 84.0, y: 33.0 },
      notes: {
        "pt-BR": "Porta leste do pátio, depois da biblioteca.",
        en: "East door of the courtyard, past the library.",
      },
    },
    summary: {
      "pt-BR":
        "Arsenal fortemente guardado com Herod, terra do Herod's Shoulder e do clássico farm de XP em grupo grande.",
      en: "The heavily guarded armoury with Herod, home of Herod's Shoulder and the classic large-group XP farm.",
    },
    tips: [
      {
        "pt-BR": "O famoso SM farm (8+ pessoas) roda Library, Armory e Cathedral em sequência para XP explosiva.",
        en: "The famous SM farm (8+ players) chains Library, Armory and Cathedral back to back for explosive XP.",
      },
      {
        "pt-BR": "Herod's Shoulder é um drop obrigatório para Warriors e Paladins de leveling.",
        en: "Herod's Shoulder is a must-have drop for leveling Warriors and Paladins.",
      },
      {
        "pt-BR": "Leve ao menos um healer dedicado: as puxadas do Armory são densas e com AoE.",
        en: "Bring at least one dedicated healer: the Armory pulls are dense and have AoE.",
      },
    ],
  },
  {
    id: "sm-cathedral",
    name: "Scarlet Monastery",
    wing: "Cathedral",
    levelRange: { min: 40, max: 50 },
    faction: "both",
    zone: "Tirisfal Glades",
    entrance: {
      zone: "Tirisfal Glades",
      coordinates: { x: 85.0, y: 32.0 },
      notes: {
        "pt-BR": "Porta leste do pátio, depois das escadas centrais.",
        en: "East door of the courtyard, past the central stairs.",
      },
    },
    summary: {
      "pt-BR":
        "A catedral com Mograine e Whitemane: a ala mais lucrativa do mosteiro, com drops de leveling excelentes.",
      en: "The cathedral with Mograine and Whitemane: the most profitable monastery wing, with excellent leveling drops.",
    },
    tips: [
      {
        "pt-BR": "Roda com folga entre 40 e 50: é a melhor XP por hora dessa faixa se o grupo for bom.",
        en: "Runs comfortably between 40 and 50: the best XP per hour in that band with a good group.",
      },
      {
        "pt-BR": "Whitemane é a primeira caster realmente perigosa do jogo: interrompa os heals.",
        en: "Whitemane is the first genuinely dangerous caster boss: interrupt the heals.",
      },
      {
        "pt-BR": "As quests do pátio do mosteiro dão itens azuis muito usados no leveling.",
        en: "The courtyard Scarlet quests give blue items widely used while leveling.",
      },
    ],
  },
  {
    id: "rfd",
    name: "Razorfen Downs",
    levelRange: { min: 37, max: 46 },
    faction: "both",
    zone: "Thousand Needles",
    entrance: {
      zone: "Thousand Needles",
      coordinates: { x: 47.0, y: 87.0 },
      notes: {
        "pt-BR": "Entrada no extremo sul de Thousand Needles, ao lado de Razorfen Kraul.",
        en: "Entrance at the southern tip of Thousand Needles, next to Razorfen Kraul.",
      },
    },
    summary: {
      "pt-BR":
        "A segunda metade da história dos quilboars, agora corrompidos pelo Scourge e liderados por Amnennar the Coldbringer.",
      en: "The second half of the quilboar story, now corrupted by the Scourge and led by Amnennar the Coldbringer.",
    },
    tips: [
      {
        "pt-BR": "As quests vêm de The Barrens, Camp Taurajo e Ratchet: junte antes de viajar.",
        en: "The quests come from The Barrens, Camp Taurajo and Ratchet: gather them before travelling.",
      },
      {
        "pt-BR": "Bom lugar para farmar XP até 46 e fechar a cadeia dos quilboars.",
        en: "Good XP up to 46 and a natural end to the quilboar chain.",
      },
      {
        "pt-BR": "Muita gente esquece a quest do Amnennar - confira o log antes de entrar.",
        en: "Many players forget the Amnennar quest - check your log before entering.",
      },
    ],
  },
  {
    id: "uldaman",
    name: "Uldaman",
    levelRange: { min: 42, max: 52 },
    faction: "both",
    zone: "Badlands",
    entrance: {
      zone: "Badlands",
      coordinates: { x: 61.0, y: 42.0 },
      notes: {
        "pt-BR": "Portão de pedra no centro das Badlands, perto de Theldurin's Folly.",
        en: "Stone gate in central Badlands, near Theldurin's Folly.",
      },
    },
    summary: {
      "pt-BR":
        "Cidade titânica com troggs, anões e o encontro com Archaedas; a cadeia dos Discs of Norgannon é a mais longa do jogo.",
      en: "Titan city full of troggs, dwarves and Archaedas; the Discs of Norgannon chain is the longest in the game.",
    },
    tips: [
      {
        "pt-BR": "Comece a cadeia dos Discs of Norgannon cedo: ela passa por Badlands, Ironforge e Uldaman.",
        en: "Start the Discs of Norgannon chain early: it spans Badlands, Ironforge and Uldaman.",
      },
      {
        "pt-BR": "As quests do Power Stones e do Shadowforge Key abrem portas internas - resolva antes do fim.",
        en: "The Power Stones and Shadowforge Key quests open inner doors - finish them before the end.",
      },
      {
        "pt-BR": "Leve um rogue ou o Shadowforge Key; sem isso você perde o caminho do Archaedas.",
        en: "Bring a rogue or the Shadowforge Key; otherwise you skip the Archaedas path.",
      },
    ],
    groupNote: {
      "pt-BR": "A parte final (Archaedas) pede grupo de 5 bem montado.",
      en: "The Archaedas finale requires a well-composed 5-player group.",
    },
  },
  {
    id: "zf",
    name: "Zul'Farrak",
    levelRange: { min: 44, max: 54 },
    faction: "both",
    zone: "Tanaris",
    entrance: {
      zone: "Tanaris",
      coordinates: { x: 39.0, y: 22.0 },
      notes: {
        "pt-BR": "Entrada em Tanaris, ao norte de Gadgetzan, no platô do templo troll.",
        en: "Entrance in Tanaris north of Gadgetzan, on the troll temple plateau.",
      },
    },
    summary: {
      "pt-BR":
        "Templo troll com os famosos eventos de escada e escort, a espada Sul'thraze e a melhor XP por hora da faixa 44-54.",
      en: "Troll temple with the famous staircase and escort events, the Sul'thraze sword and the best XP per hour in the 44-54 band.",
    },
    tips: [
      {
        "pt-BR": "Os eventos de Zul'Farrak se repetem na mesma run: boa fonte de XP e de drops.",
        en: "Zul'Farrak's events can be re-triggered in the same run: a good source of XP and loot.",
      },
      {
        "pt-BR": "A cadeia de Tanaris dá a Divine Chalice e o Filled Egg of Hakkar - pegue antes.",
        en: "The Tanaris chain gives the Divine Chalice and Filled Egg of Hakkar - grab it first.",
      },
      {
        "pt-BR": "As duas metades de Sul'thraze caem aqui e se combinam em uma espada de leveling forte.",
        en: "Both halves of Sul'thraze drop here and combine into a strong leveling sword.",
      },
      {
        "pt-BR": "No final há zumbis infinitos: foque o chefe em vez de tentar limpar tudo.",
        en: "The finale spawns endless zombies: focus the boss instead of clearing.",
      },
    ],
  },
  {
    id: "maraudon",
    name: "Maraudon",
    levelRange: { min: 46, max: 56 },
    faction: "both",
    zone: "Desolace",
    entrance: {
      zone: "Desolace",
      coordinates: { x: 29.0, y: 62.0 },
      notes: {
        "pt-BR": "Duas entradas: a laranja (oeste, mais longa) e a roxa (norte, mais curta). A roxa vem da quest do Scepter of Celebras.",
        en: "Two entrances: the orange (west, longer) and the purple (north, shorter). The purple one needs the Scepter of Celebras.",
      },
    },
    summary: {
      "pt-BR":
        "Cavernas de Theradras em Desolace, com o Scepter of Celebras, a cadeia dos Shadowshard e muito XP limpo entre 46 e 56.",
      en: "Theradras' caverns in Desolace, with the Scepter of Celebras, the Shadowshard chain and clean XP between 46 and 56.",
    },
    tips: [
      {
        "pt-BR": "Faça a quest do Scepter of Celebras em Desolace para usar a entrada roxa direto ao último chefe.",
        en: "Complete the Scepter of Celebras quest in Desolace to use the purple entrance straight to the last boss.",
      },
      {
        "pt-BR": "Ótima para farmar até 56 e pegar os drops de caster da faixa.",
        en: "Great for farming up to 56 and picking up the caster drops of the band.",
      },
      {
        "pt-BR": "A dungeon é longa: divida em duas visitas se o grupo for misto.",
        en: "The dungeon is long: split it into two visits with a mixed group.",
      },
    ],
  },
  {
    id: "sunken-temple",
    name: "Temple of Atal'Hakkar",
    levelRange: { min: 50, max: 60 },
    faction: "both",
    zone: "Swamp of Sorrows",
    entrance: {
      zone: "Swamp of Sorrows",
      coordinates: { x: 70.0, y: 55.0 },
      notes: {
        "pt-BR": "Templo submerso no leste de Swamp of Sorrows; a quest de acesso do Eranikus exige os 4 Atal'ai idols.",
        en: "Sunken temple in eastern Swamp of Sorrows; the Eranikus access quest requires the 4 Atal'ai idols.",
      },
    },
    summary: {
      "pt-BR":
        "O Sunken Temple (ST): puzzle de estátuas, cadeia do Eranikus e a famosa Dragon's Call.",
      en: "The Sunken Temple (ST): statue puzzle, the Eranikus chain and the famous Dragon's Call.",
    },
    tips: [
      {
        "pt-BR": "Resolva o puzzle das seis estátuas na ordem correta ou você perde muito tempo.",
        en: "Solve the six-statue puzzle in the correct order or you lose a lot of time.",
      },
      {
        "pt-BR": "A cadeia dos Atal'ai idols começa em Tanaris, com Marvon Rivetseeker.",
        en: "The Atal'ai idol chain starts in Tanaris, with Marvon Rivetseeker.",
      },
      {
        "pt-BR": "Boa ponte para o 60 e pré-requisito de várias quests de Blackrock.",
        en: "A solid bridge to 60 and a prerequisite for several Blackrock quests.",
      },
    ],
  },
  {
    id: "brd",
    name: "Blackrock Depths",
    levelRange: { min: 52, max: 60 },
    faction: "both",
    zone: "Blackrock Mountain",
    entrance: {
      zone: "Blackrock Mountain",
      coordinates: { x: 32.0, y: 39.0 },
      notes: {
        "pt-BR": "Entrada na parte inferior da Blackrock Mountain, acessível pela Searing Gorge ou Burning Steppes.",
        en: "Entrance on the lower level of Blackrock Mountain, reachable from Searing Gorge or Burning Steppes.",
      },
    },
    summary: {
      "pt-BR":
        "A maior dungeon do Classic: uma cidade inteira de Dark Iron dwarves com dezenas de quests e o caminho para a Onyxia.",
      en: "The largest Classic dungeon: an entire Dark Iron dwarf city with dozens of quests and the road to Onyxia.",
    },
    tips: [
      {
        "pt-BR": "As cadeias do Marshal Windsor (Alliance) e do Thrall/Onyxia (Horde) atravessam BRD várias vezes.",
        en: "The Marshal Windsor (Alliance) and Thrall/Onyxia (Horde) chains cross BRD several times.",
      },
      {
        "pt-BR": "Existem rotas curtas e completas: combine com o grupo antes de entrar.",
        en: "Short and full routes exist: agree with the group before entering.",
      },
      {
        "pt-BR": "Traga poções de fogo e resistência: os packs de melee e os Flamekeepers machucam muito.",
        en: "Bring fire protection and potions: the melee packs and Flamekeepers hit hard.",
      },
      {
        "pt-BR": "É aqui que você começa a montar o gear que te leva ao 60 e ao endgame.",
        en: "This is where you start collecting the gear that carries you to 60 and the endgame.",
      },
    ],
    groupNote: {
      "pt-BR": "A run completa pede 5 jogadores de nível 55+ e cerca de 1h30.",
      en: "A full run needs five level 55+ players and roughly 1h30.",
    },
  },
  {
    id: "lbrs",
    name: "Lower Blackrock Spire",
    levelRange: { min: 55, max: 60 },
    faction: "both",
    zone: "Blackrock Mountain",
    entrance: {
      zone: "Blackrock Mountain",
      coordinates: { x: 28.0, y: 47.0 },
      notes: {
        "pt-BR": "Subida pela rampa leste da Blackrock Mountain, acima de BRD.",
        en: "Climb the eastern ramp of Blackrock Mountain, above BRD.",
      },
    },
    summary: {
      "pt-BR":
        "A Lower Spire: orcs Blackrock e os últimos passos do attunement da UBRS, com o quartel-general de Rend.",
      en: "The Lower Spire: Blackrock orcs and the final steps of the UBRS attunement, plus Rend's headquarters.",
    },
    tips: [
      {
        "pt-BR": "A cadeia do Seal of Ascension começa aqui, com Pyroguard Emberseer.",
        en: "The Seal of Ascension chain starts here, with Pyroguard Emberseer.",
      },
      {
        "pt-BR": "XP e drops de leveling excelentes entre 55 e 60; boa para fechar sets.",
        en: "Excellent XP and leveling drops between 55 and 60; good for completing sets.",
      },
      {
        "pt-BR": "Packs de ogros e orcs patrulham agressivamente: controle as puxadas.",
        en: "Ogre and orc packs patrol aggressively: keep your pulls controlled.",
      },
    ],
  },
  {
    id: "ubrs",
    name: "Upper Blackrock Spire",
    levelRange: { min: 58, max: 60 },
    faction: "both",
    zone: "Blackrock Mountain",
    entrance: {
      zone: "Blackrock Mountain",
      coordinates: { x: 28.0, y: 47.0 },
      notes: {
        "pt-BR": "Mesma rota da LBRS; a UBRS exige o Seal of Ascension (ou alguém do grupo com a chave).",
        en: "Same route as LBRS; UBRS requires the Seal of Ascension (or a group member with the key).",
      },
    },
    summary: {
      "pt-BR":
        "A UBRS de 10 jogadores: General Drakkisath, o caminho para a Onyxia e drops que marcam o fim do leveling.",
      en: "The 10-player UBRS: General Drakkisath, the road to Onyxia and drops that mark the end of leveling.",
    },
    tips: [
      {
        "pt-BR": "Organize o Seal of Ascension antes do raid: sem a chave ninguém entra.",
        en: "Organise the Seal of Ascension before raiding: without the key nobody enters.",
      },
      {
        "pt-BR": "Leve resistência de fogo e natureza: aqui começam os padrões de raid.",
        en: "Bring fire and nature resistance: raid-level patterns start here.",
      },
      {
        "pt-BR": "Grupo de 10 com 2 healers e 2 off-tanks é o padrão para o Drakkisath.",
        en: "A 10-player group with two healers and two off-tanks is the Drakkisath standard.",
      },
    ],
    groupNote: {
      "pt-BR": "Raid de 10 jogadores; requer o Seal of Ascension para entrar.",
      en: "10-player raid; requires the Seal of Ascension to enter.",
    },
  },
  {
    id: "dm-east",
    name: "Dire Maul",
    wing: "East",
    levelRange: { min: 55, max: 60 },
    faction: "both",
    zone: "Feralas",
    entrance: {
      zone: "Feralas",
      coordinates: { x: 62.0, y: 26.0 },
      notes: {
        "pt-BR": "Entrada leste de Dire Maul, em Feralas, ao lado das ruínas élficas.",
        en: "East entrance of Dire Maul in Feralas, next to the elven ruins.",
      },
    },
    summary: {
      "pt-BR":
        "Ala arcana com os Eldreth, o farm clássico de librams e a versão do Livro do mount épico do Warlock.",
      en: "The arcane wing with the Eldreth, the classic libram farm and the Warlock epic mount content.",
    },
    tips: [
      {
        "pt-BR": "O farm de DM East é um dos mais famosos do Classic: imps, satyrs e librams por run.",
        en: "The DM East farm is one of the most famous in Classic: imps, satyrs and librams per run.",
      },
      {
        "pt-BR": "A cadeia do mount épico do Warlock passa por aqui - leve warlocks amigos.",
        en: "The Warlock epic mount chain passes through here - bring warlock friends.",
      },
      {
        "pt-BR": "Bom lugar para começar a farmar ouro antes do endgame.",
        en: "A good place to start farming gold before the endgame.",
      },
    ],
  },
  {
    id: "dm-north",
    name: "Dire Maul",
    wing: "North",
    levelRange: { min: 55, max: 60 },
    faction: "both",
    zone: "Feralas",
    entrance: {
      zone: "Feralas",
      coordinates: { x: 55.0, y: 33.0 },
      notes: {
        "pt-BR": "Entrada norte de Dire Maul, junto ao pavilhão dos ogros.",
        en: "North entrance of Dire Maul, next to the ogre pavilion.",
      },
    },
    summary: {
      "pt-BR":
        "Ala dos ogros Gordunni e do King Gordok, com a tribute run e drops de leveling muito buscados.",
      en: "The Gordunni ogre wing and King Gordok, with the tribute run and highly sought leveling drops.",
    },
    tips: [
      {
        "pt-BR": "Mantendo a cabeça do Kromcrush você faz a tribute run completa, sem repelir mobs.",
        en: "Keep Kromcrush's head to run the full tribute without repelling mobs.",
      },
      {
        "pt-BR": "Drops de caster e de tank muito bons; vale repetir até o 60.",
        en: "Very good caster and tank drops; worth repeating up to 60.",
      },
      {
        "pt-BR": "A cadeia das chaves de Dire Maul começa aqui, para abrir as outras alas.",
        en: "The Dire Maul key chain starts here, opening the other wings.",
      },
    ],
  },
  {
    id: "dm-west",
    name: "Dire Maul",
    wing: "West",
    levelRange: { min: 55, max: 60 },
    faction: "both",
    zone: "Feralas",
    entrance: {
      zone: "Feralas",
      coordinates: { x: 55.0, y: 33.0 },
      notes: {
        "pt-BR": "Entrada oeste, seguindo o mesmo caminho da ala norte em Feralas.",
        en: "West entrance, following the same path as the north wing in Feralas.",
      },
    },
    summary: {
      "pt-BR":
        "Ala dos Shen'dralar e do Immol'thar, com os librams de encantamento e o farm de Holy Water.",
      en: "The Shen'dralar wing and Immol'thar, with the enchant librams and the Holy Water farm.",
    },
    tips: [
      {
        "pt-BR": "Aqui caem os librams (Rapidity, Focus, Protection) que dão encantamentos de armadura.",
        en: "This is where the librams (Rapidity, Focus, Protection) that grant armor enchants drop.",
      },
      {
        "pt-BR": "Uma das melhores fontes de ouro do Classic no farm solo de Holy Water.",
        en: "One of the best gold sources in Classic for solo Holy Water farming.",
      },
      {
        "pt-BR": "A ala é perigosa em puxadas grandes: use o layout para dividir os packs.",
        en: "The wing is dangerous to overpull: use the layout to split packs.",
      },
    ],
  },
  {
    id: "stratholme",
    name: "Stratholme",
    levelRange: { min: 55, max: 60 },
    faction: "both",
    zone: "Eastern Plaguelands",
    entrance: {
      zone: "Eastern Plaguelands",
      coordinates: { x: 26.0, y: 11.0 },
      notes: {
        "pt-BR": "Cidade em ruínas no nordeste de Eastern Plaguelands; tem o lado live (Scarlet) e o lado undead (Scourge).",
        en: "Ruined city in north-eastern Eastern Plaguelands; it has a live (Scarlet) side and an undead (Scourge) side.",
      },
    },
    summary: {
      "pt-BR":
        "Duas alas em uma cidade: o lado Scarlet, com a cadeia da família Barov, e o lado Undead, dominado por Baron Rivendare.",
      en: "Two wings in one city: the Scarlet side with the Barov family chain, and the Undead side ruled by Baron Rivendare.",
    },
    tips: [
      {
        "pt-BR": "Baron Rivendare dropa a Deathcharger's Reins, muito rara - objetivo de muitas runs.",
        en: "Baron Rivendare drops the very rare Deathcharger's Reins - the goal of many runs.",
      },
      {
        "pt-BR": "As quests do Argent Dawn e a Key to the City precisam ser preparadas com antecedência.",
        en: "The Argent Dawn quests and the Key to the City need preparation in advance.",
      },
      {
        "pt-BR": "Excelente ponte de 55 a 60, com drops de pré-raid para quase todas as classes.",
        en: "An excellent 55-60 bridge, with pre-raid drops for almost every class.",
      },
    ],
  },
  {
    id: "scholomance",
    name: "Scholomance",
    levelRange: { min: 58, max: 60 },
    faction: "both",
    zone: "Western Plaguelands",
    entrance: {
      zone: "Western Plaguelands",
      coordinates: { x: 69.0, y: 73.0 },
      notes: {
        "pt-BR": "Caer Darrow, na ilha a leste de Western Plaguelands; a entrada exige a Skeleton Key obtida por uma cadeia.",
        en: "Caer Darrow on the island east of Western Plaguelands; entry requires the Skeleton Key from a chain.",
      },
    },
    summary: {
      "pt-BR":
        "Escola do Cult of the Damned com Rattlegore, Ras Frostwhisper e os últimos drops de leveling antes do endgame.",
      en: "The Cult of the Damned school with Rattlegore, Ras Frostwhisper and the last leveling drops before the endgame.",
    },
    tips: [
      {
        "pt-BR": "A cadeia da Skeleton Key começa em Western Plaguelands - planeje com antecedência.",
        en: "The Skeleton Key chain starts in Western Plaguelands - plan it in advance.",
      },
      {
        "pt-BR": "Dungeon de 58 a 60: foque nos drops que você vai usar no endgame.",
        en: "A 58-60 dungeon: focus on the drops you will use in the endgame.",
      },
      {
        "pt-BR": "Resista ao dano de fogo e veneno; os packs de casters são o perigo real.",
        en: "Resist the fire and poison damage; the caster packs are the real danger.",
      },
    ],
    groupNote: {
      "pt-BR": "Grupo de 5 com healer dedicado; a dungeon não perdoa puxadas apressadas.",
      en: "A five-player group with a dedicated healer; this dungeon does not forgive rushed pulls.",
    },
  },
];