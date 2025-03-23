"use client";

import React from "react";
import { useCharacterById } from "@/hooks/useDragonBall/useDragonBallCharacterById";
import CharacterDetail from "@/components/DragonBall/CharacterDetail";
import BackButton from "@/components/ui/Backbutton";

const CharacterDetailPage = () => {
  const { character, error, loading, notFound } = useCharacterById();

  const renderBackWithMessage = (message: string) => (
    <div className="flex flex-col">
      <header className="w-full">
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
    <div className="bg-background text-foreground min-h-screen flex flex-col p-5 py-10  md:px-5 transition-colors w-full">
      <header className="w-full max-w-7xl">
        <BackButton />
      </header>

      <main className="w-full md:max-w-screen-2xl md:mx-auto">
        <CharacterDetail character={character!} loading={loading} />
      </main>
    </div>
  );
};

export default CharacterDetailPage;