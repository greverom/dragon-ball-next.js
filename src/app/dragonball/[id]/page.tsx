"use client";

import React  from "react";
import dynamic from "next/dynamic";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";


const CharacterInfo = dynamic(() => import("@/component/DragonBall/Character/CharacterInfo"));
const CharacterTransformations = dynamic(() => import("@/component/DragonBall/Character/CharacterTransformations"));
const OriginPlanet = dynamic(() => import("@/component/DragonBall/Character/OriginPlanet"));

const CharacterDetailPage = () => {
  const { character, error } = useCharacterDetail();

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