"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PaginationSkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-3 mt-5">
      
      <div className="flex items-center space-x-2">
        <Skeleton 
          width={60} 
          height={20} 
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        /> 
        <Skeleton 
          width={90} 
          height={30} 
          className="rounded-md"
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        />
        <Skeleton 
          width={120} 
          height={20} 
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        />
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Skeleton 
          width={90} 
          height={45} 
          className="rounded-lg"
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        /> 
        <Skeleton 
          width={100} 
          height={20} 
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        /> 
        <Skeleton 
          width={90} 
          height={45} 
          className="rounded-lg"
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        /> 
      </div>

    </div>
  );
};

export default PaginationSkeleton;