"use client";

import { usePagination } from "@/context/Paginationcontxt";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterListSkeleton: React.FC = () => {
  const { limit } = usePagination();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-6">
      {Array.from({ length: limit }).map((_, index) => (
        <div 
          key={index} 
          className="bg-white/10 dark:bg-white/30 backdrop-blur-md border 
                     border-[rgba(255,255,255,0.2)] shadow-xl 
                     p-2 sm:p-4 flex flex-col justify-center items-center 
                     cursor-pointer rounded-xl w-[145px] sm:w-auto min-h-[240px] sm:min-h-[270px]"
        >
          <div className="w-[130px] h-[160px] sm:w-[169px] sm:h-[180px]">
            <Skeleton
              className="w-full h-full rounded-lg object-contain image-blur"
              baseColor={`rgb(var(--skeleton-base))`}
              highlightColor={`rgb(var(--skeleton-highlight))`}
            />
          </div>

          <Skeleton 
            width={100}
            height={20}
            className="mt-2 rounded"
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`} 
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterListSkeleton;