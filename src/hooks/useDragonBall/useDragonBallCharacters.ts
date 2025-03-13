import { useState, useEffect } from "react";
import { getDragonBallCharacters } from "@/services/dragonBallApi";
import { Character, CharacterResponse } from "@/interface/interface";

export const useDragonBallCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data: CharacterResponse = await getDragonBallCharacters();
                setCharacters(data.items); 
            } catch (err) {
                console.error("Error al cargar los personajes:", err);
                setError("Error al cargar los personajes");
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return { characters, loading, error };
};