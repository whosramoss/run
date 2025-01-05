"use client";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { cn, CommonsProps } from "@utils/utils";
import { motion } from "framer-motion";

export function FadeIn({ children, className }: CommonsProps) {
  const { animateRef, animate, initial, setDelayVariant } =
    useAnimationFadeIn();

  const value = {
    ref: animateRef,
    initial,
    animate,
    variants: setDelayVariant({ delay: 0.5, duration: 1.5 }),
  };

  return (
    <motion.div
      aria-hidden="true"
      className={cn("delay", className)}
      {...value}
    >
      {children}
    </motion.div>
  );
}
