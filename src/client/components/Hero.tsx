"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import ChipButton from "@components/buttons/ChipButton";

export default function Hero() {
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const firstVariant = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0,
        duration: 1.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const secondVariants = {
    hidden: { opacity: 0, y: `6em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.25,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const list = [
    { title: 'Docs', link: 'https://threejs.org/docs/' },
    { title: 'Examples', link: 'https://threejs.org/examples/' },
    { title: 'Journey', link: 'https://threejs-journey.com/' },
  ];

  return (
    <motion.section className="pt-16 sm:pt-0">
      <motion.div
        className="flex flex-col items-center justify-center text-black dark:text-third"
        aria-hidden="true"
        ref={animateRef}
        initial={initial}
        animate={animate}
      >
        <motion.h1
          className="z-30 w-full text-center text-4xl sm:text-8xl font-bold leading-2 tracking-[0.2px]  tracking-wider cursor-none"
          variants={firstVariant}
        >
          Next.Js Boilerplate
        </motion.h1>
        <motion.h2 className="text-sm sm:text-2xl font-bold py-4 tracking-wide cursor-none" variants={secondVariants} >
          Next.Js • Three.Js • Typescript • Tailwind
        </motion.h2>
        <motion.div className="flex flex-row py-2" variants={secondVariants} >
          {list.map(({ title, link }, index) => <ChipButton key={index} title={title} onClick={() => window.open(link, "_blank")} />)}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
