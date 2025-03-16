"use client";

import { useState, useEffect, useMemo } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

export const useDragonBallCharacters = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true); 
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoaded(false);
      try {
        setIsLoaded(false);
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
        setIsLoaded(true);
      }
    };

    fetchCharacters();
  }, [page, limit]); 

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const memoizedCharacters = useMemo(() => characters, [characters]);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (isFirstLoad) {
      setIsFirstLoad(false); 
    }
  };

  return { 
    characters: memoizedCharacters, 
    page, 
    setPage, 
    totalPages, 
    error, 
    isLoaded, 
    isFirstLoad, 
    handleImageLoad, 
    limit, 
    setLimit };
};