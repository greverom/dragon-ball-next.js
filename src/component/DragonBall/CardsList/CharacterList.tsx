"use client";

import Link from "next/link";
import { Character } from "@/interface/interface";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {characters.map((character) => (
        <Link href={`/dragonball/${character.id}`} key={character.id}>
          <div className="bg-card text-card-foreground p-4 flex flex-col items-center cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={character.image}
              alt={character.name}
              className="w-70 h-70 object-contain rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{character.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;