"use client";

import React from "react";
import Image from "next/image";

const CharacterDetailBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/images/namekuseinbackground.png"
        alt="Fondo Dragon Ball Detalle"
        fill
        priority
        quality={75}
        className="object-cover opacity-75 brightness-[0.8]"
        style={{ objectPosition: "top" }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default CharacterDetailBackground;