import axios from "axios";

const API_URL = "https://dragonball-api.com/api/characters";

export const getDragonBallCharacters = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error("Error al obtener los personajes", error);
        throw error;
    }
};