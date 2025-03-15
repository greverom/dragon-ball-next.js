"use client";

import   React from "react";
import { CharacterInfo } from "@/component/DragonBall/Character/CharacterInfo";
import { CharacterTransformations } from "@/component/DragonBall/Character/CharacterTransformations";
import { OriginPlanet } from "@/component/DragonBall/Character/OriginPlanet";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";
import   Loader from "@/component/ui/loaders";

const CharacterDetailPage = () => {
  const { character, loading, error } = useCharacterDetail();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-foreground transition-colors">
        <Loader /> 
      </div>
    );
  }

  if (error || !character) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-7 bg-background text-foreground transition-colors">
      <CharacterInfo character={character} />
      <OriginPlanet character={character} />
      <CharacterTransformations character={character} />
    </div>
  );
};

export default CharacterDetailPage;