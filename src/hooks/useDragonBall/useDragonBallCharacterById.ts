import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchDragonBallCharacterById } from "@/services/dragonBallApi";
import { Character } from "@/interface/interface";

interface Props {
  params: { id: string };
}

export const useCharacterById = () => {
  const { id } = useParams() as Props["params"]; 
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const getCharacter = async () => {
      setLoading(true); 
      try {
        const data = await fetchDragonBallCharacterById(Number(id));
        if (data) {
          setCharacter(data);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        setError(`Error al obtener el personaje.${error}`);
      } finally {
        setTimeout(() => setLoading(false), 300);  
      }
    };

    getCharacter();
  }, [id]);

  return { character, loading, error, notFound };
};