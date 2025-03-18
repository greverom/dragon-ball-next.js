"use client"
import React, { Suspense } from "react";
import CharacterList from "@/components/DragonBall/CharacterList/CharacterList";
import DragonBallTitle from "@/components/DragonBall/DragonBallTitle/DragonBallTitle";
import CharacterListSkeleton from "@/components/Skeleton/DragonBallPage/CharacterListSkeleton";
import DragonBallTitleSkeleton from "@/components/Skeleton/DragonBallPage/DragonballTitleSkeleton";
import { useLoading } from "@/hooks/loading/useloading";
import Pagination from "@/components/ui/Pagination/Pagination";
import PaginationSkeleton from "@/components/Skeleton/DragonBallPage/PaginationSkeleton";

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
        <Suspense fallback={<CharacterListSkeleton />}>
          <CharacterList />
        </Suspense>
        {isLoading ? <PaginationSkeleton /> : <Pagination />}
      </main>
    </div>
  );
};

export default DragonBallPage;