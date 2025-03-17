"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";
import { usePagination } from "@/context/Paginationcontxt";

export const useDragonBallCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const abortControllerRef = useRef<AbortController | null>(null);
  const { page, limit, setTotalPages } = usePagination();

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);

    getDragonBallCharacters(page, limit)
      .then((data) => {
        if (!controller.signal.aborted) {
          if (data?.items && data?.meta) {
            setCharacters(data.items);
            setTotalPages(data.meta.totalPages);
          } else {
            setError("No se encontraron personajes");
          }
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          console.error("Error al cargar los personajes:", err);
          setError("Error al cargar los personajes");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [page, limit, setTotalPages]); 

  const memoizedCharacters = useMemo(() => characters, [characters]);

  return {
    characters: memoizedCharacters,
    error,
    isLoading,
  };
};