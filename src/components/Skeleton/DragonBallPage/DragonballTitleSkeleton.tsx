"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DragonBallTitleSkeleton = () => {
  return (
    <div className="text-center">
      <div className="mx-auto w-[220px] h-[45px] sm:w-[220px] sm:h-[45px]">
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