"use client";

import   Link from "next/link";
import Image from "next/image"; 
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {characters.map((character) => (
            <Link href={`/dragonball/${character.id}`} key={character.id}>
              <div className="bg-white/10 dark:bg-white/10 backdrop-blur-md 
                    border border-[rgb(var(--border-color))] shadow-md
                    p-2 sm:p-4 flex flex-col justify-center items-center 
                    cursor-pointer rounded-xl transition-transform duration-300 hover:scale-[1.02]
                    w-[160px] sm:w-auto min-h-[240px] sm:min-h-[270px]">
              <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-contain image-blur rounded-lg"
                  unoptimized
                  priority
                />
              </div>
                <h2 className="text-sm sm:text-lg font-semibold mt-2 truncate max-w-full text-center">
                  {character.name}
                </h2>
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