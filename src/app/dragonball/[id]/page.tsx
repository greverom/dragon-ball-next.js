"use client";

import React from "react";
import { useCharacterById } from "@/hooks/useDragonBall/useDragonBallCharacterById";
import CharacterDetail from "@/components/DragonBall/CharacterDetail";
import BackButton from "@/components/ui/Backbutton";

const CharacterDetailPage = () => {
  const { character, error, loading, notFound } = useCharacterById();

  const renderBackWithMessage = (message: string) => (
    <div className="p-6">
      <header className="w-full max-w-7xl mx-auto">
        <BackButton />
      </header>
      <p className="text-center text-red-500 text-lg font-semibold mt-6">{message}</p>
    </div>
  );

  if (notFound) return renderBackWithMessage("Personaje no encontrado");

  if (error) return renderBackWithMessage(error);

  if (!character && !loading)
    return renderBackWithMessage("No se pudo cargar el personaje.");

  return (
    <div className="p-10">
      <header className="w-full max-w-7xl mx-auto">
        <BackButton />
      </header>
      <CharacterDetail character={character!} loading={loading} />
    </div>
  );
};

export default CharacterDetailPage;