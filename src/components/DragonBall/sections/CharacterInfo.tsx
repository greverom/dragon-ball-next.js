"use client";

import React from "react";
import Image from "next/image";
import { Character } from "@/interface/interface";
import imageLoader from "@/utils/imageLoader";

interface CharacterInfoProps {
  character?: Character;  
}

export const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  if (!character) return null;  

  return (
    <div className="max-w-6xl w-full bg-card text-card-foreground">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex justify-center md:justify-start">
        <Image
          loader={imageLoader}
          src={character.image}
          alt={character.name}
          width={180}  
          height={180} 
          className="w-40 h-75 md:w-48 md:h-80 object-contain rounded-lg"
          priority
        />
        </div>

        <div className="w-full md:flex-1 px-0 md:px-7 text-justify md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold flex flex-col md:flex-row items-start md:items-end mb-4">
            {character.name}
            <span className="ml-4 text-[rgb(var(--secondary-foreground))] text-sm font-thin">
              {character.race}
            </span>
          </h1>

          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ki Máximo:</strong> {character.maxKi}</p>
          <p className="text-sm sm:text-base mb-3 leading-relaxed">{character.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;