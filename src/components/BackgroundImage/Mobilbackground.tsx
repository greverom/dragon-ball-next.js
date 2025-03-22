"use client";

import Image from "next/image";

const MobileBackground = () => {
  return (
    <Image
      src="/images/fondo-dragonball-2.webp"
      alt="Fondo Dragon Ball móvil"
      width={500}
      height={500}
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1] block md:hidden opacity-30"
      priority
    />
  );
};

export default MobileBackground;