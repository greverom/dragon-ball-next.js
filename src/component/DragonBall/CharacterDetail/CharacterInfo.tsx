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
    <div className="max-w-6xl w-full bg-card text-card-foreground p-6 mt-6">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            loader={imageLoader}
            src={character.image}
            alt={character.name}
            width={160}
            height={160}
            className="w-32 md:w-40 h-auto object-contain md:mr-2 image-blur"
            priority
          />
        </div>

        <div className="flex-1 px-0 md:px-7 text-justify md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold flex flex-col md:flex-row items-start md:items-end mb-4">
            {character.name}
            <span className="ml-4 text-[rgb(var(--secondary-foreground))] text-sm font-thin">
              {character.race}
            </span>
          </h1>

          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ki Máximo:</strong> {character.maxKi}</p>
          <p className="text-md mb-3 leading-relaxed">{character.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;