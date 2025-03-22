"use client";

import { usePagination } from "@/context/Paginationcontxt";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterListSkeleton: React.FC = () => {
  const { limit } = usePagination();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 mb-6">
      {Array.from({ length: limit }).map((_, index) => (
        <div 
          key={index} 
          className="bg-card text-card-foreground p-4 flex flex-col items-center cursor-pointer rounded-lg"
        >
          {/* Imagen */}
          <div className="w-[160px] sm:w-[160px] md:w-[200px]">
            <Skeleton 
              height={225}
              className="rounded-lg"
              baseColor={`rgb(var(--skeleton-base))`} 
              highlightColor={`rgb(var(--skeleton-highlight))`} 
            />
          </div>
          
          {/* Nombre */}
          <Skeleton 
            width={120} 
            height={22} 
            className="mt-2" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`} 
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterListSkeleton;