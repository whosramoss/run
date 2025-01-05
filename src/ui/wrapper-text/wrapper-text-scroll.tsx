"use client";

import { useTextScrollEffect } from "@hooks/useTextScrollEffect";
import { cn, CommonsProps, SCROLL_CONTENT_ID } from "@utils/utils";
import React from "react";

export function WrapperTextScroll({ children }: CommonsProps) {
  const { textScroll, setTextScroll } = useTextScrollEffect();

  if (textScroll) {
    setTextScroll();
  }

  return (
    <div className={cn(
      'lg:h-screen lg:w-full lg:max-w-[100vw] lg:overflow-y-hidden lg:fixed lg:left-0',
      'min-h-screen w-full max-w-[100vw] overflow-y-auto'
    )}>
      <div id={SCROLL_CONTENT_ID}>{children}</div>
    </div>
  );
}
