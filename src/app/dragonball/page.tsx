"use client";

import CharacterList from "@/component/DragonBall/CardsList/CharacterList";
import { useDragonBallCharacters } from "@/hooks/useDragonBall/useDragonBallCharacters";

const DragonBallPage = () => {
  const { characters } = useDragonBallCharacters();

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      <header>
        <h1 className="text-4xl font-bold mb-6">Dragon Ball</h1>
      </header>

      <main className="max-w-4xl mx-auto py-5">
        <CharacterList characters={characters} />
      </main>
    </div>
  );
};

export default DragonBallPage;