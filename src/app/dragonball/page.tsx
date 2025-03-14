"use client";

import { useDragonBallCharacters } from "@/hooks/useDragonBall/useDragonBallCharacters";
import Link from "next/link";

const DragonBallPage = () => {
  const { characters } = useDragonBallCharacters(); 

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-10">
      <header>
        <h1 className="text-4xl font-bold text-black mb-6">Dragon Ball</h1>
      </header>
(
        <main className="max-w-4xl mx-auto py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Link href={`/dragonball/${character.id}`} key={character.id}>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-70 h-70 object-contain rounded-lg"
                  />
                  <h2 className="text-lg font-semibold mt-2 text-gray-800">
                    {character.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </main>
      
    </div>
  );
};

export default DragonBallPage;