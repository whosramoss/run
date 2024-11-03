"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import Link from "next/link";

export default function CTA() {
  const { animateRef, animate, initial } = useAnimationFadeIn();

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
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

  const subTitleVariants = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.55,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center font-bold py-20 sm:py-16 tracking-wide"
      ref={animateRef}
      initial={initial}
      animate={animate}
      variants={contactVariants}
    >
      <motion.h2 variants={titleVariants} className="text-third  py-2 text-base sm:text-4xl cursor-none">
        Three.JS has a large number of 3D shapes
      </motion.h2>
      <motion.h2
        className="cursor-pointer py-4 text-xl sm:text-3xl "
        variants={subTitleVariants}
      >
        <Link className="flex px-6 py-2  sm:py-4 cursor-pointer items-center justify-center rounded-full bg-third text-primary" href={"https://threejs.org/manual/#en/primitives"}>
          See more shapes
        </Link>

      </motion.h2>
    </motion.section>
  );
}

