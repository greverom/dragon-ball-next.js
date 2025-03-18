"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CharacterTransformationsSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mt-10 text-center">
      {/* Título del Skeleton */}
      <h2 className="text-2xl font-bold text-center mb-4">
        <Skeleton width={200} height={30} baseColor="rgb(var(--skeleton-base))" highlightColor="rgb(var(--skeleton-highlight))" />
      </h2>

      {/* Grid de Skeletons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center bg-card text-card-foreground p-4">
            <Skeleton width={128} height={128} className="rounded-lg" baseColor="rgb(var(--skeleton-base))" highlightColor="rgb(var(--skeleton-highlight))" />
            <Skeleton width={100} height={20} className="mt-2" baseColor="rgb(var(--skeleton-base))" highlightColor="rgb(var(--skeleton-highlight))" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterTransformationsSkeleton;