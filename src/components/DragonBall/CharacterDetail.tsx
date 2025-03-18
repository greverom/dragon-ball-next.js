"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Character } from "@/interface/interface";
import CharacterInfoSkeleton from "@/components/Skeleton/DetailPage/CharacterInfoSkeleton";
import OriginPlanetSkeleton from "@/components/Skeleton/DetailPage/OriginPlanet";
import CharacterTransformationsSkeleton from "@/components/Skeleton/DetailPage/CharacterTransformationskeleton";

const CharacterInfo = dynamic(() => import("@/components/DragonBall/sections/CharacterInfo"));
const CharacterTransformations = dynamic(() => import("@/components/DragonBall/sections/CharacterTransformations"));
const OriginPlanet = dynamic(() => import("@/components/DragonBall/sections/OriginPlanet"));

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