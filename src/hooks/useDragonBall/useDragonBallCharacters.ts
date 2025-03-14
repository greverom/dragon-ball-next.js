import { useState, useEffect, useRef } from "react";
import { fetchDragonBallCharacters } from "@/services/dragonBallApi";
import { Character, CharacterResponse } from "@/interface/interface";
import { useLoading } from "../loading/useLoading";

export const useDragonBallCharacters = () => {
    const { loading, startLoading, stopLoading } = useLoading();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [error, setError] = useState<string | null>(null);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        if (hasFetchedData.current) return;
        hasFetchedData.current = true;

        const fetchCharacters = async () => {
            try {
                startLoading(); 
                const data: CharacterResponse = await fetchDragonBallCharacters();
                if (data && data.items) {
                    setCharacters(data.items);
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
    }, ); 

    return { characters, loading, error };
};