"use client";

import React from "react";
import { Character } from "@/interface/interface";

interface CharacterTransformationsProps {
  character: Character;
}

export const CharacterTransformations: React.FC<CharacterTransformationsProps> = ({ character }) => {
  if (!character?.transformations || character.transformations.length === 0) {
    return <p className="text-center mt-6">No tiene transformaciones.</p>;
  }

  return (
    <div className="w-full max-w-4xl mt-10 text-center">
      <h2 className="text-2xl font-bold text-center mb-4">Transformaciones</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {character.transformations.map((transformation) => (
          <div key={transformation.id} className="flex flex-col items-center bg-card text-card-foreground p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={transformation.image}
              alt={transformation.name}
              className="w-32 h-32 object-contain rounded-lg"
            />
            <p className="mt-1 font-medium">{transformation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};