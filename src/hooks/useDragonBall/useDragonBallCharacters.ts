"use client";

import { useState, useEffect } from "react";
import { fetchDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";
import { useLoading } from "@/context/LoadingContext";

export const useDragonBallCharacters = () => {
  const { startLoading, stopLoading } = useLoading();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      startLoading();
      try {
        const data = await fetchDragonBallCharacters(page, 10); 
        if (data && data.items) {
          setCharacters(data.items);
          setTotalPages(data.totalPages || 1);
        } else {
          console.error("Los personajes no se obtuvieron correctamente", data);
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

  return { characters, page, setPage, totalPages, error };
};