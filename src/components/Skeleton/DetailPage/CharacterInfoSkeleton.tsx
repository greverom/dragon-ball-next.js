"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterInfoSkeleton = () => {
  return (
    <div className="max-w-6xl w-full bg-card text-card-foreground h-[320px] flex items-center mt-16 md:mt-0">
      <div className="flex flex-col  md:flex-row md:items-center w-full">
        
        {/* Imagen del personaje */}
        <div className="flex justify-center md:justify-start">
          <Skeleton 
            width={180} 
            height={230} 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
        </div>

        {/* Detalles del personaje */}
        <div className="flex-1 px-3 md:px-7 text-justify md:text-left space-y-2">
          <Skeleton 
            height={30} 
            width="20%" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
          <Skeleton 
            height={20} 
            width="30%" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
          <Skeleton 
            height={20} 
            width="100%" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
          <Skeleton 
            height={20} 
            width="100%" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
          <Skeleton 
            height={20} 
            width="40%" 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoSkeleton;