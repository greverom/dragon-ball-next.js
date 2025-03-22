"use client";

import React from "react";
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">

      <Image
        src="/images/dragonballbackgroun4.jpg"
        alt="Fondo Dragon Ball Desktop"
        fill
        priority
        quality={75}
        className="hidden sm:block object-cover brightness-[0.7] opacity-80 fade-mask"
      />

      <Image
        src="/images/fondo-dragonball-2.webp"
        alt="Fondo Dragon Ball Mobile"
        fill
        priority
        quality={75}
        className="block sm:hidden object-cover brightness-[0.7] opacity-80 fade-mask"
      />
    </div>
  );
};

export default BackgroundImage;