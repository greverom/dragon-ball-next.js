const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;


export const getDragonBallCharacters = async (page: number = 1) => {
  if (!API_URL) {
    console.error("ERROR: NEXT_PUBLIC_API_URL no está definida en .env.local");
    throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  }

  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=10`, { cache: "no-store" });

    if (!response.ok) {
      console.error("Error al obtener los personajes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return null; 
  }
};


export const fetchDragonBallCharacters = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${SITE_URL}/api/dragonball?page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Error al obtener los personajes desde la API interna");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los personajes desde la API interna", error);
    return { items: [], totalPages: 1 };
  }
};

export const fetchDragonBallCharacterById = async (id: number) => {
  try {
    if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");

    const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" }); 
    if (!response.ok) throw new Error("Error al obtener el personaje desde la API externa");

    return await response.json();
  } catch (error) {
    console.error("Error al obtener el personaje por ID desde la API externa", error);
    return null;
  }
};

export const searchDragonBallCharacters = async (name: string) => {
  try {
    if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");

    const response = await fetch(`${API_URL}?name=${name}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Error al buscar personajes");

    return await response.json();
  } catch (error) {
    console.error("Error al buscar personajes:", error);
    return null;
  }
};
