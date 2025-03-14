const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;


export const getDragonBallCharacters = async () => {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  }

  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Error al obtener los personajes");

    return await response.json();
  } catch (error) {
    console.error("Error al obtener los personajes", error);
    throw error;
  }
};


export const fetchDragonBallCharacters = async () => {
  try {
    const response = await fetch(`${SITE_URL}/api/dragonball`, { cache: "no-store" });

    if (!response.ok) throw new Error("Error al obtener los personajes desde la API interna");

    return await response.json();
  } catch (error) {
    console.error("Error al obtener los personajes desde la API interna", error);
    return null;
  }
};