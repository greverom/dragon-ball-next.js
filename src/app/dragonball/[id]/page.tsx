"use client"

import Loader from "@/component/ui/loaders";
import { useCharacterDetail } from "@/hooks/useDragonBall/useDragonBallDetail";
import React from "react";

const CharacterDetailPage = () => {
  const { character, loading, error } = useCharacterDetail();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <Loader /> 
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-white">
      <div className="flex flex-row items-center max-w-4xl w-full bg-white">
       <div className="w-1/3 flex justify-center">
       {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={character?.image}
            alt={character?.name}
            className="w-50 h-auto object-contain rounded-lg"
          />
        </div>
          <div className="w-2/3 pl-6"> 
            <h1 className="text-3xl text-black font-bold mb-3 flex items-center">
              {character?.name}
              <span className="ml-2 mt-2 text-gray-600 text-lg font-medium">{character?.race}</span>
            </h1>
            <p className="text-gray-700 text-lg mb-3">{character?.description}</p>
            <p className="text-gray-500"><strong>Género:</strong> {character?.gender}</p>
            <p className="text-gray-500"><strong>Ki Máximo:</strong> {character?.maxKi}</p>
          </div>
        </div>
        
        {character?.transformations && character?.transformations.length > 0 ? (
          <div className="w-full max-w-4xl mt-10 text-center">
            <h2 className="text-2xl font-bold text-black text-center mb-4">Transformaciones</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-5 justify-center">
              {character.transformations.map((transformation) => (
                <div key={transformation.id} className="flex flex-col items-center bg-white p-4 rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={transformation.image} 
                    alt={transformation.name} 
                    className="w-32 h-32 object-contain rounded-lg"
                  />
                  <p className="mt-1 font-medium text-gray-700">{transformation.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No tiene transformaciones.</p>
        )}
      
    </div>
  );
};

export default CharacterDetailPage;