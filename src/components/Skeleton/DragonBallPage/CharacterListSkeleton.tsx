"use client";

import { usePagination } from "@/context/Paginationcontxt";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterListSkeleton: React.FC = () => {
  const { limit } = usePagination();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
      {Array.from({ length: limit }).map((_, index) => (
        <div 
          key={index} 
          className="bg-card text-card-foreground flex flex-col items-center cursor-pointer"
        >
          {/* Imagen */}
          <div className="w-[144px] h-[234px] sm:w-[190px] sm:h-[220px] md:w-[199px] md:h-[268px] ">
            <Skeleton 
              className="w-full h-full"
              baseColor={`rgb(var(--skeleton-base))`} 
              highlightColor={`rgb(var(--skeleton-highlight))`} 
            />
          </div>
          
          
          {/* <Skeleton 
            width={120} 
            height={22} 
            className="mt-2" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`} 
          /> */}
        </div>
      ))}
    </div>
  );
};

export default CharacterListSkeleton;