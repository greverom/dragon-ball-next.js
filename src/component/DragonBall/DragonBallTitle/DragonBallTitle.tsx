"use client";

import React from "react";
import { Title } from "../../../Styles/dragonBallStyles";


interface DragonBallTitleProps {
  text: string;
}

const DragonBallTitle: React.FC<DragonBallTitleProps> = ({ text }) => {
  return (
  <Title data-text={text}>{text}</Title>
 );
};

export default DragonBallTitle;