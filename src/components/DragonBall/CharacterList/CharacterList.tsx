"use client";

import   Link from "next/link";
import { useDragonBallCharacters } from "@/hooks/useDragonBall/useDragonBallCharacters";
import   CharacterListSkeleton from "@/components/Skeleton/DragonBallPage/CharacterListSkeleton";

const CharacterList = () => {
  const { characters, isLoading } = useDragonBallCharacters();

  return (
    <div className="flex flex-col items-center">

      {isLoading ? (
         <>
         <CharacterListSkeleton />
       </>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 mb-6">
            {characters.map((character) => (
              <Link href={`/dragonball/${character.id}`} key={character.id}>
                <div className="bg-card text-card-foreground p-4 flex flex-col items-center cursor-pointer rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-60 h-60 object-contain image-blur rounded-lg"
                  />
                  <h2 className="text-lg font-semibold mt-2">{character.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterList;