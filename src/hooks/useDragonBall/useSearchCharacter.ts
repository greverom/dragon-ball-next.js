import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { searchDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

export const useSearchCharacters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasSelectedSuggestion, setHasSelectedSuggestion] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasSelectedSuggestion || !searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const results = await searchDragonBallCharacters(searchQuery.trim());
        setSuggestions(results || []);
      } catch (err) {
        console.error("Error buscando personajes:", err);
      }
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery, hasSelectedSuggestion]);

  useEffect(() => {
    setSearchQuery("");
    setSuggestions([]);
    setHasSelectedSuggestion(false);
  }, [pathname]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const results = await searchDragonBallCharacters(searchQuery.trim());

      if (results?.length > 0) {
        router.push(`/dragonball/${results[0].id}`);
        setSuggestions([]);
        setHasSelectedSuggestion(true);
      } else {
        setError("Personaje no encontrado, intenta con otro nombre.");
      }
    } catch (error) {
      setError(`Error al buscar personaje. ${error}`)
    } 
  };

  const handleSuggestionClick = (character: Character) => {
    setSearchQuery(character.name);
    setSuggestions([]);
    setHasSelectedSuggestion(true);
    router.push(`/dragonball/${character.id}`);
  };

  const handleChange = (value: string) => {
    setSearchQuery(value);
    setHasSelectedSuggestion(false);
    setError(null);
  };

  return {
    searchQuery,
    setSearchQuery: handleChange,
    handleSearch,
    suggestions,
    handleSuggestionClick,
    error,
  };
};