"use client";

import React from "react";
import { HoverTitle } from "../../../Styles/dragonBallStyles";

interface HoverTitleComponentProps {
  text: string;
}

const HoverTitleComponent: React.FC<HoverTitleComponentProps> = ({ text }) => {
  return <HoverTitle>{text}</HoverTitle>;
};

export default HoverTitleComponent;