"use client";

import { useState } from "react";
import { Character } from "@/interface/interface";
import { useRouter } from "next/navigation";


export const useSearchCharacters = (characters: Character[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const searchCharacters = (query: string) => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return [];

    return characters.filter((char) =>
      char.name.toLowerCase().includes(cleanQuery)
    );
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;

    const foundCharacters = searchCharacters(searchQuery); 

    if (foundCharacters.length > 0) {
      router.push(`/dragonball/${foundCharacters[0].id}`); 
    } else {
      console.log("Personaje no encontrado");
    }

    setSearchQuery("");
  };

  return { searchQuery, setSearchQuery, searchCharacters, handleSearch };
};