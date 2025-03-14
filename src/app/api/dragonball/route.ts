import { NextResponse } from "next/server";
import { getDragonBallCharacters } from "@/services/dragonBallApi";

export async function GET() {
    try {
        const characters = await getDragonBallCharacters();
        return NextResponse.json(characters); 
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Error al obtener los personajes" },
            { status: 500 }
        );
    }
}

