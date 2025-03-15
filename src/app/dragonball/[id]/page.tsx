"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";

const CharacterInfo = dynamic(() => import("@/component/DragonBall/Character/CharacterInfo"));
const CharacterTransformations = dynamic(() => import("@/component/DragonBall/Character/CharacterTransformations"));
const OriginPlanet = dynamic(() => import("@/component/DragonBall/Character/OriginPlanet"));
const Loader = dynamic(() => import("@/component/ui/loaders"), { ssr: false });

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
      <Suspense fallback={<Loader />}>
        <CharacterInfo character={character} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <OriginPlanet character={character} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CharacterTransformations character={character} />
      </Suspense>
    </div>
  );
};

export default CharacterDetailPage;