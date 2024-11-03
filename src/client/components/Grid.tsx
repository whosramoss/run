"use client";

import React, { ReactNode } from "react";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { motion } from "framer-motion";

export default function Grid({ children }: { children: ReactNode }) {

  const { animateRef, animate, initial } = useAnimationFadeIn();

  const variants = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center pb-[20px] pt-12"
      ref={animateRef}
    >
      <motion.div
        className="grid w-[92%] max-w-[1320px] grid-cols-1 grid-rows-9 sm:grid-cols-3 sm:grid-rows-3 place-content-center place-items-center gap-x-5 gap-y-7"
        aria-hidden="true"
        initial={initial}
        animate={animate}
        variants={variants}
      >
        {children}

      </motion.div>
    </motion.section>
  );
}



