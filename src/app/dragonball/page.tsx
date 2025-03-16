"use client";

import dynamic from "next/dynamic";
import React, { Suspense, useState, useEffect } from "react";
import CharacterListSkeleton from "@/component/Skeleton/DragonBallPage/CharacterListSkeleton"; 
import DragonBallTitleSkeleton from "@/component/Skeleton/DragonBallPage/DragonballTitleSkeleton";
 

const CharacterList = dynamic(() => import("@/component/DragonBall/CharacterList/CharacterList"));
const DragonBallTitle = dynamic(() => import("@/component/DragonBall/DragonBallTitle/DragonBallTitle"));

const DragonBallPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center p-10 transition-colors">
      
      <header>
        {isLoading ? <DragonBallTitleSkeleton /> : <DragonBallTitle text="Dragon Ball Character" />}
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