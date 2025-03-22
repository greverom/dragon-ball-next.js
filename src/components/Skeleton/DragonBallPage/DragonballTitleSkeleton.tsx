"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DragonBallTitleSkeleton = () => {
  return (
    <div className="text-center">
      <div className="mx-auto w-[180px] h-[36px] sm:w-[300px] sm:h-[48px] md:w-[600px] md:h-[67px]">
        <Skeleton 
          className="rounded-md w-full h-full"
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        />
      </div>
    </div>
  );
};

export default DragonBallTitleSkeleton;