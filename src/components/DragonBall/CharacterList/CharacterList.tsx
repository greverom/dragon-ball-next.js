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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-6">
          {characters.map((character) => (
            <Link href={`/dragonball/${character.id}`} key={character.id}>
              <div className="bg-white/10 dark:bg-white/50 backdrop-blur-md border 
                    border-[rgba(255,255,255,0.2)] shadow-xl 
                    p-2 sm:p-4 flex flex-col justify-center items-center 
                    cursor-pointer rounded-xl transition-transform duration-300 hover:scale-[1.02]
                    w-[145px] sm:w-auto min-h-[240px] sm:min-h-[270px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-[160px] h-[160px] sm:w-45 sm:h-50 object-contain image-blur rounded-lg"
                />
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