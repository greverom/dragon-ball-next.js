"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

export const useDragonBallCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const  abortControllerRef = useRef<AbortController | null>(null);


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

            setTotalPages((prev) => (prev !== data.meta.totalPages ? data.meta.totalPages : prev));
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