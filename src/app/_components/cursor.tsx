"use client";
import { msDelay } from "@utils/utils";
import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.style.visibility = "visible";
      }
    }, msDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      id="cursor"
      style={{ visibility: "hidden" }}
    ></div>
  );
}
