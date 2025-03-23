"use client"
import React, { Suspense } from "react";
import CharacterList from "@/components/DragonBall/CharacterList/CharacterList";
import CharacterListSkeleton from "@/components/Skeleton/DragonBallPage/CharacterListSkeleton";
import Pagination from "@/components/ui/Pagination/Pagination";
import BackButton from "@/components/ui/Backbutton";


const DragonBallPage = () => {

  return (
    <>
  
  <div className="bg-background text-foreground min-h-screen flex flex-col py-10 px-5 md:p-10  transition-colors w-full">
      <header className="w-full max-w-7xl">
        <BackButton />
      </header>

      <main className="w-full max-w-7xl sm:mx-auto py-5">
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