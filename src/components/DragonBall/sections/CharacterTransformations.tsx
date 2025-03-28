"use client";

import React from "react";
import Image from "next/image";
import { Character } from "@/interface/interface";
import imageLoader from "@/utils/imageLoader";
import CharacterTransformationsSkeleton from "@/components/Skeleton/DetailPage/CharacterTransformationskeleton";

interface CharacterTransformationsProps {
  character?: Character;
  isLoading?: boolean;
}

export const CharacterTransformations: React.FC<CharacterTransformationsProps> = ({ character, isLoading }) => {
  if (isLoading) {
    return <CharacterTransformationsSkeleton />;
  }
  
  if (!character?.transformations || character.transformations.length === 0) {
    return <p className="text-center mt-6">No tiene transformaciones.</p>;
  }

  return (
    <div className="w-full max-w-4xl mt-10 text-center">
      <h2 className="text-2xl font-bold text-center mb-4">Transformaciones</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {character.transformations.map((transformation, index) => (
          <div key={transformation.id} className="flex flex-col items-center bg-card text-card-foreground p-4">
            <Image
              loader={imageLoader}
              src={transformation.image}
              alt={transformation.name}
              width={128}
              height={128}
              className="w-32 h-32 object-contain rounded-lg"
              unoptimized
              priority={index === 0}  
              loading={index === 0 ? "eager" : "lazy"} 
            />
            <p className="mt-1 font-medium">{transformation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterTransformations;