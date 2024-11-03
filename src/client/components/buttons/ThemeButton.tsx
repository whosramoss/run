"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeEnum } from "@shared/enums";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const style = {
    default: `h-[40px] w-[40px] content-center rounded-full justify-items-center cursor-pointer `,
    light: `bg-primary dark:bg-transparent text-third`,
    dark: `dark:bg-primary bg-transparent text-third`,
  };

  const variants = {
    hidden: { opacity: 0, y: `4em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  function handleTheme(e: any) {
    e.preventDefault();
    if (theme === ThemeEnum.system) {
      setTheme(ThemeEnum.light);
    } else {
      setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
    }
  }


  return (
    <motion.div
      ref={animateRef}
      initial={initial}
      animate={animate}
      variants={variants}
      className="z-50 fixed flex px-1 py-1 right-[5%] bottom-8  gap-[4px] rounded-full backdrop-blur-3xl bg-[#696c7157] ">

      <div onClick={handleTheme} className={`${style.default} ${style.light}`}><FiSun /></div>
      <div onClick={handleTheme} className={`${style.default} ${style.dark}`}><FiMoon /></div>
    </motion.div>
  );
}

