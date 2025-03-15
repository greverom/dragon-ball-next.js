"use client";

import { useState, useEffect } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";
import { useLoading } from "@/context/LoadingContext";

export const useDragonBallCharacters = () => {
  const { startLoading, stopLoading } = useLoading();
  const [isFirstLoad, setIsFirstLoad] = useState(true); 
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      startLoading();
      try {
        setIsLoaded(false);
        const data = await getDragonBallCharacters(page, 8);
        
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
        stopLoading();
      }
    };

    fetchCharacters();
  }, [page]); 

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (isFirstLoad) {
      setIsFirstLoad(false); 
    }
  };

  return { characters, page, setPage, totalPages, error, isLoaded, isFirstLoad, handleImageLoad };
};