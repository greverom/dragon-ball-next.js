"use client";

import { useSearchCharacters } from "@/hooks/useDragonBall/useSearchCharacter";

const SearchNavbar = () => {
  const {
    searchQuery,
    setSearchQuery,
    handleSearch,
    suggestions,
    error,
    handleSuggestionClick,
  } = useSearchCharacters();

  return (
    <div className="relative w-full max-w-xs">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-100 text-black"
        />
      </form>

      {suggestions.length > 0 && (
        <ul  className="absolute z-50 w-full mt-1 bg-[rgb(var(--background))] text-[rgb(var(--text-color))] border border-[rgb(var(--border-color))] rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((character) => (
            <li
              key={character.id}
              onClick={() => handleSuggestionClick(character)}
             className="px-4 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.1)] transition-colors"
            >
              {character.name}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="absolute z-50 mt-1 w-full bg-red-100 text-red-700 text-sm p-2 rounded shadow">
          {error}
        </p>
      )}
    </div>
  );
};

export default SearchNavbar;