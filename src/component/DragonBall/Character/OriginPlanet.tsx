"use client";

import React from "react";
import Image from "next/image";
import { Character } from "@/interface/interface";
import imageLoader from "@/utils/imageLoader";

interface OriginPlanetProps {
  character?: Character;
}

export const OriginPlanet: React.FC<OriginPlanetProps> = ({ character }) => {
  if (!character?.originPlanet) return null;

  return (
    <div className="max-w-5xl mt-8 text-center bg-card text-card-foreground p-5">
      <h2 className="text-2xl font-bold mb-4">Planeta de Origen</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center">

        <Image
          loader={imageLoader}
          src={character.originPlanet.image}
          alt={`Imagen del planeta ${character.originPlanet.name}`} 
          width={160}
          height={160}
          className="w-40 h-40 object-contain"
          unoptimized
        />

        <div className="md:ml-8 text-left">
          <h3 className="text-xl font-semibold">{character.originPlanet.name}</h3>
          <p className="text-md">{character.originPlanet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OriginPlanet;