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
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
}) {
  const { w, h, t } = useResponsive();

  const {
    textColor = "var(--white-500)",
    fontSize = t(16),
    fontWeight = 500,
    width = w(445),
    maxWidth = "100%",
    height = h(55),
    placeholder = "Search",
    type = "text",
    backgroundColor = "transparent",
    borderRadius = 10,
    border = "1px solid var(--primary-500)",
    value = "",
    onChange = () => {},
    prefixIcon,
    suffixIcon,
    onPrefixClick,
    onSuffixClick,
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
      {prefixIcon && (
        <div
          style={{
            position: "absolute",
            left: `${paddingHorizontal / 2}px`,
            cursor: onPrefixClick ? "pointer" : "default",
            zIndex: 1,
            maxWidth: paddingHorizontal,
          }}
          onClick={onPrefixClick}
        >
{prefixIcon}
        </div>
      )}

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
          paddingLeft: prefixIcon ? paddingHorizontal : 0,
          paddingRight: suffixIcon ? paddingHorizontal : 0,
        }}
      />

      <label
        style={{
          position: "absolute",
          left: `${paddingHorizontal + (prefixIcon ? paddingHorizontal : 0)}px`,
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

      {suffixIcon && (
        <div
          style={{
            position: "absolute",
            right: `${paddingHorizontal}px`,
            cursor: onSuffixClick ? "pointer" : "default",
            zIndex: 1,
            maxWidth: paddingHorizontal,
          }}
          onClick={onSuffixClick}
        >
          {suffixIcon}
        </div>
      )}
    </div>
  );
}
