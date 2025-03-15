"use client";

import React from "react";
import { Character } from "@/interface/interface";

interface CharacterInfoProps {
  character: Character;
}

export const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  return (
    <div className="flex flex-row items-center max-w-6xl w-full bg-card text-card-foreground p-6">

      <div className="w-1/4 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={character?.image}
          alt={character?.name}
          className="w-40 h-auto object-contain rounded-lg"
        />
      </div>

      <div className="w-3/4 px-6 flex flex-col items-start justify-start">
        <h1 className="text-3xl font-bold mb-3 flex items-end">
          {character?.name}
          <span className="ml-2 mt-2 text-[rgb(var(--secondary-foreground))] text-sm font-thin">
            {character?.race}
          </span>
        </h1>
        <p className="text-md mb-3">{character?.description}</p>
        <p><strong>Género:</strong> {character?.gender}</p>
        <p><strong>Ki Máximo:</strong> {character?.maxKi}</p>
      </div>
    </div>
  );
};