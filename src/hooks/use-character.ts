import { useContext } from "react";
import { CharacterContext } from "@/context/character-context";

/** Reads the shared character state. Must be used inside `CharacterProvider`. */
export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error("useCharacter must be used inside a CharacterProvider.");
  }

  return context;
};