'use client';

import React from "react";
import { useResponsive } from "../utils/responsive_helper";

export function CommonButton(props: {
  textColor?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  text: string;
  backgroundColor?: string;
  borderRadius?: number;
  onClick: () => void;
}) {
  const { w, h, t } = useResponsive();

  const {
    textColor = "var(--white-500)",
    fontSize = t(16),
    width = w(445),
    height = h(56),
    text = "Click Me",
    backgroundColor = "var(--primary-500)",
    borderRadius = 8,
    onClick,
  } = props;

  return (
    <button
      style={{
        color: textColor,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        border: "none",
        fontSize: `${fontSize}px`,
        cursor: "pointer",
        
      }}
      onClick={onClick}

    >
      {text}
    </button>
  );
}
