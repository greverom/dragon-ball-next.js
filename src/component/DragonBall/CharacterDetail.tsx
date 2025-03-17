"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Character } from "@/interface/interface";
import CharacterInfoSkeleton from "@/component/Skeleton/DetailPage/CharacterInfoSkeleton";
import OriginPlanetSkeleton from "@/component/Skeleton/DetailPage/OriginPlanet";
import CharacterTransformationsSkeleton from "@/component/Skeleton/DetailPage/CharacterTransformationskeleton";

const CharacterInfo = dynamic(() => import("@/component/DragonBall/sections/CharacterInfo"));
const CharacterTransformations = dynamic(() => import("@/component/DragonBall/sections/CharacterTransformations"));
const OriginPlanet = dynamic(() => import("@/component/DragonBall/sections/OriginPlanet"));

interface CharacterDetailProps {
  character: Character;
  loading: boolean;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, loading }) => {
  return (
    <div className="flex flex-col items-center p-5 bg-background text-foreground transition-colors">
      {loading ? <CharacterInfoSkeleton /> : <CharacterInfo character={character} />}
      {loading ? <OriginPlanetSkeleton /> : <OriginPlanet character={character} />}
      {loading ? <CharacterTransformationsSkeleton /> : <CharacterTransformations character={character} />}
    </div>
  );
};

export default CharacterDetail;