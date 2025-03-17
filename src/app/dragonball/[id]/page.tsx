"use client";

import React from "react";
import { useCharacterById } from "@/hooks/useDragonBall/useDragonBallCharacterById";
import CharacterDetail from "@/component/DragonBall/CharacterDetail";

const CharacterDetailPage = () => {
  const { character, error, loading } = useCharacterById();

  if (error || !character) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return <CharacterDetail character={character} loading={loading} />;
};

export default CharacterDetailPage;