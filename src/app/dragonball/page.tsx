import   React from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { CharacterResponse } from "@/interface/interface";

const DragonBallPage = async () => {
  let characters: CharacterResponse;
  try {
    characters = await getDragonBallCharacters();
  } catch (error) {
    console.log(error)
    return <p className="text-center text-red-500">Error al cargar los personajes</p>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-10">
      
      <header>
        <h1 className="text-4xl font-bold text-black mb-6">Dragon Ball</h1>
      </header>

      <main className="max-w-4xl mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {characters.items.map((character) => (
            <div key={character.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={character.image} 
                alt={character.name} 
                className="w-70 h-70 object-contain rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2 text-gray-800">{character.name}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DragonBallPage;