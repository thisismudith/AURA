'use client';

import React, { useState } from "react";
import { useResponsive } from "../utils/responsive_helper";

export function CommonTextField(props: {
  textColor?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  placeholder?: string;
  type?: string;
  backgroundColor?: string;
  borderRadius?: number;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const { w, h, t } = useResponsive();

  const {
    textColor = "var(--dark-500)",
    fontSize = t(16),
    width = w(445),
    height = h(55),
    placeholder = "Search",
    type="text",
    backgroundColor = "var(--white-500)",
    borderRadius = 10,
    value = "",
    onChange = () => {},
  } = props;

  const paddingHorizontal = w(16);

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        borderRadius,
        border: "solid var(--primary-500) 1px",
        padding: `0 ${paddingHorizontal}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          fontSize: `${fontSize}px`,
          backgroundColor: "transparent",
          color: textColor,
          paddingTop: h(10),
        }}
      />
      <label
        style={{
          position: "absolute",
          left: `${paddingHorizontal}px`,
          top: value ? `${h(4)}px` : `${height / 2 - fontSize / 2}px`,
          fontSize: value ? `${t(10)}px` : `${fontSize}px`,
          color: "var(--primary-500)",
          pointerEvents: "none",
          transition: "all 0.2s ease",
        }}
      >
        {placeholder}
      </label>
    </div>
  );
}
