'use client';

import "@/styles/normalize.css";
import { useState } from "react";
import { useResponsive } from "../utils/responsive_helper";

export function CommonTextField(props: {
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  width?: number;
  maxWidth?: string; // in %
  height?: number;
  placeholder?: string;
  type?: string;
  backgroundColor?: string;
  borderRadius?: number;
  border?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const { w, h, t } = useResponsive();

  const {
    textColor = "var(--dark-500)",
    fontSize = t(16),
    fontWeight = 500,
    width = w(445),
    maxWidth = "100%",
    height = h(55),
    placeholder = "Search",
    type="text",
    backgroundColor = "var(--white-500)",
    borderRadius = 10,
    border = "1px solid var(--primary-500)",
    value = "",
    onChange = () => {},
  } = props;

  const paddingHorizontal = w(16);
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        maxWidth: maxWidth,
        height: `${height}px`,
        backgroundColor,
        borderRadius,
        border: border,
        padding: `0 ${paddingHorizontal}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        type={type}
        style={{
          width: "100%",
          height: "100%",
          fontSize: `${fontSize}px`,
          backgroundColor: "transparent",
          color: textColor,
          paddingTop: h(10),
          paddingBottom: h(10),
        }}
      />
      <label
        style={{
          position: "absolute",
          left: `${paddingHorizontal}px`,
          top: "50%",
          fontWeight: fontWeight,
          transform: (value || inputFocus) ? "translate(-2%, -150%)" : "translateY(-50%)",
          fontSize: (value || inputFocus) ? `${t(11)}px` : `${fontSize}px`,
          color: "var(--primary-500)",
          pointerEvents: "none",
          transition: "all 0.25s ease",
        }}
      >
        {placeholder}
      </label>
    </div>
  );
}
