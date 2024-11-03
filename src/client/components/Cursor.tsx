"use client";

import React from "react";
import { cn } from "@shared/utils";
import { useAnimationCursor } from "@hooks/useAnimationCursor";

export default function CustomCursor({ speed = 0.1 }) {
  const { cursorRef, visible } = useAnimationCursor(speed);
  return (
    <div className="cursor-wrapper">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed left-0 z-50 h-[30px] w-[30px] rounded-[100%] bg-primary opacity-0 mix-blend-difference transition-opacity duration-[2s] ease-[cubic-bezier(0.075,0.82,0.165,1)]",
          { "opacity-1": visible },
        )}
      ></div>
    </div>
  );
}
