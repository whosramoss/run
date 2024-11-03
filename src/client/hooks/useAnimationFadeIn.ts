import { AnimationProps, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = {
  animateRef: (node?: Element | null | undefined) => void;
  animate: AnimationProps["animate"];
  initial: string;
};

export const useAnimationFadeIn = (
  threshold = 0,
  firstState = "visible",
  secondState = "hidden",
): Props => {
  const animate = useAnimation();

  const { ref: animateRef, inView } = useInView({
    threshold: threshold ?? 0,
    triggerOnce: true,
  });

  useEffect(() => {
    animate.start(inView ? firstState : secondState);
  }, [animate, inView]);

  return { animateRef, animate, initial: secondState };
};
