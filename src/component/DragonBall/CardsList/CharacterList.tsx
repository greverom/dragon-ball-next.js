"use client";

import Link from "next/link";
import { useDragonBallCharacters } from "@/hooks/useDragonBall/useDragonBallCharacters";

const CharacterList = () => {
  const { characters, page, setPage, totalPages } = useDragonBallCharacters();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {characters.map((character) => (
          <Link href={`/dragonball/${character.id}`} key={character.id}>
            <div className="bg-card text-card-foreground p-4 flex flex-col items-center cursor-pointer shadow-lg rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={character.image}
                alt={character.name}
                className="w-60 h-60 object-contain rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{character.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-500 dark:bg-gray-700 text-white dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="text-lg font-medium">
          Página {page} de {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-500  dark:bg-gray-700 text-white dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
        >
          Siguiente 
        </button>
      </div>
    </div>
  );
};

export default CharacterList;