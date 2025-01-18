"use client";

import { useAnimationPreLoader } from "@hooks/useAnimationPreLoader";
import { motion } from "framer-motion";
import React from "react";

interface PreLoaderProps {
  text: string;
};

export default function PreLoader({
  text,
}: PreLoaderProps) {
  const { textControls, containerControls, containerVariants, charVariants } =
    useAnimationPreLoader(text);

  return (
    <motion.div
      className="fixed inset-0 z-[99] flex cursor-none items-center justify-center overflow-hidden bg-secondary text-primary"
      variants={containerVariants}
      initial={"initial"}
      animate={containerControls}
    >
      <div className="absolute flex w-[50vw] items-center justify-center text-[20vw] font-extrabold">
        {text.split("").map((char, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={textControls}
            variants={charVariants}
            initial={"initial"}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
