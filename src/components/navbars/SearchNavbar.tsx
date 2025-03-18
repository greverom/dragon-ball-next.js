"use client";

import { useSearchCharacters } from "@/hooks/useDragonBall/useSearchCharacter";

const SearchNavbar = () => {
    const { searchQuery, setSearchQuery, handleSearch } = useSearchCharacters();

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