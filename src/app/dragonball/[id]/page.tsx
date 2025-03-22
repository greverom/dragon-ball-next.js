"use client";

import React from "react";
import { useCharacterById } from "@/hooks/useDragonBall/useDragonBallCharacterById";
import CharacterDetail from "@/components/DragonBall/CharacterDetail";

const CharacterDetailPage = () => {
  const { character, error, loading, notFound } = useCharacterById();

 
  if (notFound) {
    return <p className="text-center text-red-500 text-lg font-semibold">❌ Personaje no encontrado</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;
  }

  if (!character && !loading) {
    return <p className="text-center text-red-500 text-lg font-semibold">No se pudo cargar el personaje.</p>;
  }

  return <CharacterDetail character={character!} loading={loading} />;
};

export default CharacterDetailPage;