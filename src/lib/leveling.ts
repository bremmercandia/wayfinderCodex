import { dungeonQuests } from "@/data/dungeonQuests";
import { dungeons } from "@/data/dungeons";
import type { Dungeon, DungeonQuest, FactionId, FactionScope, Localized } from "@/types/game";

export const MIN_CHARACTER_LEVEL = 1;
export const MAX_CHARACTER_LEVEL = 60;

/** Clamps an arbitrary numeric input to a valid Classic character level. */
export const clampLevel = (value: number): number => {
  if (Number.isNaN(value)) return MIN_CHARACTER_LEVEL;
  return Math.min(Math.max(Math.round(value), MIN_CHARACTER_LEVEL), MAX_CHARACTER_LEVEL);
};

/** True when a faction-scoped entry is available to the given faction. */
export const isAvailableToFaction = (scope: FactionScope, faction: FactionId): boolean =>
  scope === "both" || scope === faction;

export const sortDungeonsByLevel = (list: Dungeon[]): Dungeon[] =>
  [...list].sort(
    (left, right) =>
      left.levelRange.min - right.levelRange.min || left.name.localeCompare(right.name),
  );

/** Dungeons whose level band contains the character level and match the faction. */
export const getDungeonsForLevel = (level: number, faction: FactionId): Dungeon[] =>
  sortDungeonsByLevel(
    dungeons.filter(
      (dungeon) =>
        isAvailableToFaction(dungeon.faction, faction) &&
        level >= dungeon.levelRange.min &&
        level <= dungeon.levelRange.max,
    ),
  );

/** The next dungeons the player will be able to run, closest level first. */
export const getUpcomingDungeons = (
  level: number,
  faction: FactionId,
  limit = 3,
): Dungeon[] =>
  sortDungeonsByLevel(
    dungeons.filter(
      (dungeon) =>
        isAvailableToFaction(dungeon.faction, faction) && dungeon.levelRange.min > level,
    ),
  ).slice(0, limit);

export const getDungeonById = (dungeonId: string): Dungeon | null =>
  dungeons.find((dungeon) => dungeon.id === dungeonId) ?? null;

export interface QuestChainGroup {
  id: string;
  name?: Localized;
  quests: DungeonQuest[];
}

export interface GroupedQuests {
  chains: QuestChainGroup[];
  standalone: DungeonQuest[];
}

/** Quests of a dungeon filtered by faction. */
export const getDungeonQuests = (
  dungeonId: string,
  faction: FactionId,
): DungeonQuest[] =>
  dungeonQuests.filter(
    (quest) =>
      quest.dungeonId === dungeonId && isAvailableToFaction(quest.faction, faction),
  );

/**
 * Splits the quests of a dungeon into ordered chains and standalone quests, so
 * the UI can explain "faça esta antes desta outra" without hardcoding order.
 */
export const groupDungeonQuests = (quests: DungeonQuest[]): GroupedQuests => {
  const chainsById = new Map<string, QuestChainGroup>();
  const standalone: DungeonQuest[] = [];

  for (const quest of quests) {
    if (!quest.chain) {
      standalone.push(quest);
      continue;
    }

    const existing = chainsById.get(quest.chain.id);
    if (existing) {
      existing.quests.push(quest);
      continue;
    }

    chainsById.set(quest.chain.id, {
      id: quest.chain.id,
      name: quest.chain.name,
      quests: [quest],
    });
  }

  const chains = [...chainsById.values()].map((chain) => ({
    ...chain,
    quests: [...chain.quests].sort(
      (left, right) => (left.chain?.step ?? 0) - (right.chain?.step ?? 0),
    ),
  }));

  chains.sort(
    (left, right) => (left.quests[0]?.chain?.step ?? 0) - (right.quests[0]?.chain?.step ?? 0),
  );

  standalone.sort(
    (left, right) =>
      (left.level ?? 0) - (right.level ?? 0) || left.name.localeCompare(right.name),
  );

  return { chains, standalone };
};

/** True when the quest has followers that depend on it. */
export const hasChainFollowers = (quest: DungeonQuest, quests: DungeonQuest[]): boolean =>
  quests.some((candidate) =>
    candidate.prerequisites.some(
      (prerequisite) =>
        prerequisite.name === quest.name ||
        (prerequisite.wowheadId !== undefined && prerequisite.wowheadId === quest.wowheadId),
    ),
  );