"use client";

import { useState, useEffect } from 'react';

const mHeight = 1024;
const mWidth = 1440;

function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : mWidth,
    height: typeof window !== 'undefined' ? window.innerHeight : mHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export function useResponsive() {
  const { width, height } = useWindowSize();

  const h = (value: number) => {
    const divide = mHeight / value;
    return height / divide;
  };

  const w = (value: number) => {
    const divide = mWidth / value;
    return width / divide;
  };

  const t = (value: number) => {
    return (h(value) + w(value)) / 2;
  };

  return { h, w, t };
}
