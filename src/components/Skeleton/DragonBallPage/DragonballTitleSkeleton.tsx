"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DragonBallTitleSkeleton = () => {
  return (
    <div className="text-center">
      <Skeleton 
        width={600} 
        height={64} 
        baseColor={`rgb(var(--skeleton-base))`} 
        highlightColor={`rgb(var(--skeleton-highlight))`}
      />
    </div>
  );
};

export default DragonBallTitleSkeleton;