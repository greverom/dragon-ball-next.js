import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchDragonBallCharacters } from "@/services/dragonBallApi"; 

export const useSearchCharacters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      console.log("Buscando:", searchQuery);
      const results = await searchDragonBallCharacters(searchQuery);

      if (results && results.length > 0) {
        router.push(`/dragonball/${results[0].id}`);
      } else {
        console.error("Personaje no encontrado, intenta con otro nombre.");
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    } finally {

      setSearchQuery("");
    }
  };

  return { searchQuery, setSearchQuery, handleSearch };
};