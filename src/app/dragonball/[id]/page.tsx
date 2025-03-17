"use client";

import React  from "react";
import dynamic from "next/dynamic";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";
import CharacterInfoSkeleton from "@/component/Skeleton/DetailPage/CharacterInfoSkeleton";
import OriginPlanetSkeleton from "@/component/Skeleton/DetailPage/OriginPlanet";
import CharacterTransformationsSkeleton from "@/component/Skeleton/DetailPage/CharacterTransformationskeleton";


const CharacterInfo = dynamic(() => import("@/component/DragonBall/CharacterDetail/CharacterInfo"));
const CharacterTransformations = dynamic(() => import("@/component/DragonBall/CharacterDetail/CharacterTransformations"));
const OriginPlanet = dynamic(() => import("@/component/DragonBall/CharacterDetail/OriginPlanet"));

const CharacterDetailPage = () => {
  const { character, error, loading } = useCharacterDetail();

  if (error || !character) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-background text-foreground transition-colors">
      
      {loading ? <CharacterInfoSkeleton /> : <CharacterInfo character={character} />}

      {loading ? <OriginPlanetSkeleton /> : <OriginPlanet character={character} />}

      {loading ? <CharacterTransformationsSkeleton /> : <CharacterTransformations character={character} />}
      
    </div>
  );
};

export default CharacterDetailPage;