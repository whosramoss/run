"use client";

import { useTextScrollEffect } from "@hooks/useTextScrollEffect";
import { CommonsProps, SCROLL_CONTENT_ID } from "@utils/utils";
import React from "react";

export function WrapperTextScroll({ children }: CommonsProps) {
  const { canRun, run } = useTextScrollEffect();

  if (canRun) {
    run();
  }

  return (
    <div className="scroll-wrapper">
      <div id={SCROLL_CONTENT_ID}>{children}</div>
    </div>
  );
}
