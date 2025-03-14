"use client";

import Loader from "@/component/ui/loaders";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";
import React from "react";

const CharacterDetailPage = () => {
  const { character, loading, error } = useCharacterDetail();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-foreground transition-colors">
        <Loader /> 
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-7 bg-background text-foreground transition-colors">
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
            <span className="ml-2 mt-2 text-[rgb(var(--secondary-foreground))] text-sm font-thin">{character?.race}</span>
          </h1>
          <p className="text-md mb-3">{character?.description}</p>
          <p><strong>Género:</strong> {character?.gender}</p>
          <p><strong>Ki Máximo:</strong> {character?.maxKi}</p>
        </div>
      </div>
      

      {character?.transformations && character?.transformations.length > 0 ? (
        <div className="w-full max-w-4xl mt-10 text-center">
          <h2 className="text-2xl font-bold text-center mb-4">Transformaciones</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-5 justify-center">
            {character.transformations.map((transformation) => (
              <div key={transformation.id} className="flex flex-col items-center bg-card text-card-foreground">
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
      ) : (
        <p className="text-center mt-6">No tiene transformaciones.</p>
      )}
    
    </div>
  );
};

export default CharacterDetailPage;