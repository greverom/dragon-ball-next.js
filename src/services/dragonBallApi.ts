import { Character } from "@/interface/interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  console.error("ERROR: `NEXT_PUBLIC_API_URL` no está definida en `.env.local`");
  throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
}

export const getDragonBallCharacters = async (page: number = 1, limit: number = 58) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Error al obtener los personajes");
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return { items: [], totalPages: 1 };
  }
};

export const searchDragonBallCharacters = async (name: string) => {
  try {
    const response = await fetch(`${API_URL}?name=${name}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Error al buscar personajes");
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error al buscar personajes:", error);
    return null;
  }
};

export const fetchDragonBallCharacterById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Error al obtener el personaje");
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener el personaje:", error);
    return null;
  }
};

export const fetchAllDragonBallCharacters = async () => {
  let page = 1;
  let allCharacters: Character[] = [];
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const data = await getDragonBallCharacters(page);
      if (data && data.items) {
        allCharacters = [...allCharacters, ...data.items];
        totalPages = data.totalPages;
      }
      page++;
    }
    return allCharacters;

  } catch (error) {
    console.error("Error al obtener todos los personajes:", error);
    return [];
  }
};