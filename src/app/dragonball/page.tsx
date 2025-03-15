"use client";

import Loader from "@/component/ui/loaders";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CharacterList = dynamic(() => import("@/component/DragonBall/CharacterList/CharacterList"));
const DragonBallTitle = dynamic(() => import("@/component/DragonBall/DragonBallTitle/DragonBallTitle"));

const DragonBallPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      <header>
      <Suspense fallback={<Loader />}>
        <DragonBallTitle text="Dragon Ball Character" />
      </Suspense>
      </header>

      <main className="max-w-5xl mx-auto py-10">
      <Suspense fallback={<Loader />}>
        <CharacterList />
      </Suspense>
      </main>
    </div>
  );
};

export default DragonBallPage;