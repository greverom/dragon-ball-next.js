"use client";

import { HoverImageContainer } from "@/Styles/dragonBallStyles";
import Image from "next/image";

const HoverImage = () => {
  return (
    <HoverImageContainer>
      <Image
        src="/images/dragonBall-characters.png"  
        alt="Dragon Ball Characters"
        width={1200}  
        height={750}  
        className="rounded-lg "
        priority
      />
    </HoverImageContainer>
  );
};

export default HoverImage;