"use client"
import React, { Suspense } from "react";
import CharacterList from "@/components/DragonBall/CharacterList/CharacterList";
import DragonBallTitle from "@/components/DragonBall/DragonBallTitle/DragonBallTitle";
import CharacterListSkeleton from "@/components/Skeleton/DragonBallPage/CharacterListSkeleton";
import DragonBallTitleSkeleton from "@/components/Skeleton/DragonBallPage/DragonballTitleSkeleton";
import { useLoading } from "@/hooks/loading/useloading";
import Pagination from "@/components/ui/Pagination/Pagination";
import BackButton from "@/components/ui/Backbutton";
import CharacterDetailBackground from "@/components/BackgroundImage/CharacterDeatilBackground";


const DragonBallPage = () => {
  const { isLoading } = useLoading(300);
  return (
    <>
    <CharacterDetailBackground />
  
    <div className="bg-background text-foreground min-h-screen flex flex-col p-10 transition-colors w-full">
      <header className="w-full max-w-7xl mx-auto">
        <BackButton />
        <div className="bg-white/10 dark:bg-white/28 backdrop-blur-md border border-[rgba(255,255,255,0.2)] 
                        shadow-lg p-2 rounded-full text-center max-w-sm mx-auto mt-4">
          <Suspense fallback={<DragonBallTitleSkeleton />}>
            {isLoading ? (
              <DragonBallTitleSkeleton />
            ) : (
              <DragonBallTitle text="Personajes" />
            )}
          </Suspense>
        </div>
      </header>

      <main className="w-full max-w-8xl sm:mx-auto py-10 px-0">
        <Suspense fallback={<CharacterListSkeleton />}>
          <CharacterList />
        </Suspense>
        <Pagination />
      </main>
    </div>
    </>
  );
  
};

export default DragonBallPage;