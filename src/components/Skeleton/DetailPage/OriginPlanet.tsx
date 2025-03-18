"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OriginPlanetSkeleton = () => {
  return (
    <div className="w-full max-w-6xl mt-8 text-center bg-card text-card-foreground p-6">
      {/* Título del Skeleton */}
      <Skeleton 
        width={220} 
        height={35} 
        baseColor={`rgb(var(--skeleton-base))`} 
        highlightColor={`rgb(var(--skeleton-highlight))`}
      />

      <div className="flex flex-col md:flex-row items-center justify-center mt-5">
        {/* Imagen del planeta (Esfera gris) */}
        <Skeleton 
          width={180} 
          height={180} 
          className="rounded-full" 
          baseColor={`rgb(var(--skeleton-base))`} 
          highlightColor={`rgb(var(--skeleton-highlight))`}
        />

        <div className="md:ml-10 text-left w-full max-w-[750px]">
          {/* Nombre del planeta */}
          <Skeleton 
            width={200} 
            height={28} 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
          {/* Descripción del planeta */}
          <Skeleton 
            width="100%" 
            height={16} 
            count={3} 
            baseColor={`rgb(var(--skeleton-base))`} 
            highlightColor={`rgb(var(--skeleton-highlight))`}
          />
        </div>
      </div>
    </div>
  );
};

export default OriginPlanetSkeleton;