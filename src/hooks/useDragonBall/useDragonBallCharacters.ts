"use client";

import { useState, useEffect, useMemo } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

export const useDragonBallCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true); 

      try {
        const data = await getDragonBallCharacters(page, limit);

        if (data?.items && data?.meta) {
          setCharacters(data.items);
          setTotalPages(data.meta.totalPages);
        } else {
          setError("No se encontraron personajes");
        }
      } catch (err) {
        console.error("Error al cargar los personajes:", err);
        setError("Error al cargar los personajes");
      } finally {
        setIsLoading(false); 
      }
    };

    fetchCharacters();
  }, [page, limit]);

  const memoizedCharacters = useMemo(() => characters, [characters]);

  return {
    characters: memoizedCharacters,
    page,
    setPage,
    totalPages,
    error,
    isLoading, 
    limit,
    setLimit,
  };
};