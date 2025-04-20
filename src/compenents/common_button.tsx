'use client';

import React from "react";
import "@/styles/normalize.css";
import { useState } from "react";
import { useResponsive } from "../utils/responsive_helper";

export function CommonButton(props: {
  textColor?: string;
  fontSize?: number;
  width?: number;
  maxWidth?: string; // in %
  height?: number;
  text: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  borderRadius?: number;
  onClick: () => void;
}) {
  const { w, h, t } = useResponsive();

  const {
    textColor = "var(--white-500)",
    fontSize = t(16),
    width = w(445),
    maxWidth = "100%",
    height = h(56),
    text = "Click Me",
    backgroundColor = "var(--primary-500)",
    backgroundHoverColor = "var(--primary-700)",
    borderRadius = 8,
    onClick,
  } = props;

  const [buttonHover, setButtonHover] = useState(false);


  return (
    <button
      style={{
        color: textColor,
        width: `${width}px`,
        maxWidth: maxWidth,
        height: `${height}px`,
        backgroundColor: buttonHover ? backgroundHoverColor : backgroundColor,
        borderRadius: borderRadius,
        border: "none",
        fontSize: `${fontSize}px`,
        cursor: "pointer",
        transition: "all 0.1s ease",        
      }}
      onClick={onClick}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      onFocus={() => setButtonHover(true)}
      onBlur={() => setButtonHover(false)}

    >
      {text}
    </button>
  );
}
