"use client";

import CharacterList from "@/component/DragonBall/CardsList/CharacterList";

const DragonBallPage = () => {

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      <header>
        <h1 className="text-3xl font-bold mb-6">Dragon Ball Character</h1>
      </header>

      <main className="max-w-5xl mx-auto py-10">
        <CharacterList />
      </main>
    </div>
  );
};

export default DragonBallPage;