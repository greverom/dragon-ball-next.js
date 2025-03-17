"use client"
import React, { Suspense } from "react";
import CharacterList from "@/component/DragonBall/CharacterList/CharacterList";
import DragonBallTitle from "@/component/DragonBall/DragonBallTitle/DragonBallTitle";
import CharacterListSkeleton from "@/component/Skeleton/DragonBallPage/CharacterListSkeleton";
import DragonBallTitleSkeleton from "@/component/Skeleton/DragonBallPage/DragonballTitleSkeleton";
import { useLoading } from "@/hooks/loading/useloading";

const DragonBallPage = () => {
  const { isLoading } = useLoading(300);
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      <header>
        <Suspense fallback={<DragonBallTitleSkeleton />}>
        {isLoading ? <DragonBallTitleSkeleton /> : <DragonBallTitle text="Dragon Ball Character" />}
        </Suspense>
      </header>

      <main className="max-w-5xl mx-auto py-10">
        <Suspense fallback={<CharacterListSkeleton limit={4} />}>
          <CharacterList />
        </Suspense>
      </main>
    </div>
  );
};

export default DragonBallPage;