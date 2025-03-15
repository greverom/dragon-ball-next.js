"use client";

import { Character } from "@/interface/interface";
import { useSearchCharacters } from "@/hooks/useDragonBall/useSearchCharacter";

interface SearchNavbarProps {
  characters: Character[];
}

const SearchNavbar = ({ characters }: SearchNavbarProps) => {
    const { searchQuery, setSearchQuery, handleSearch } = useSearchCharacters(characters);

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-3 py-2 pr-10 rounded-lg bg-white dark:bg-gray-100 text-black"
      />
    </form>
  );
};

export default SearchNavbar;