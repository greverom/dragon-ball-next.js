"use client";

import CharacterList from "@/component/DragonBall/CardsList/CharacterList";
import DragonBallTitle from "@/component/DragonBall/DragonBallTitle/DragonBallTitle";

const DragonBallPage = () => {

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      <header>
        <DragonBallTitle text="Dragon Ball Character" />
      </header>

      <main className="max-w-5xl mx-auto py-10">
        <CharacterList />
      </main>
    </div>
  );
};

export default DragonBallPage;