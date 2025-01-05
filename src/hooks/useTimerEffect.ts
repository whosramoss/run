import { isMobile } from "react-device-detect";
import { useEffect, useRef } from "react";

export const useTimerEffect = () => {
  const dateRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const checker = (el: number) => (el < 10 ? `0${el}` : el);

  useEffect(() => {
    if (isMobile) return;

    const updateTimer = () => {
      let d = new Date();
      let hh = d.getHours();
      let mm = d.getMinutes();
      let ss = d.getSeconds();

      if (dateRef.current) {
        dateRef.current.innerText = `${checker(hh)}:${checker(mm)}:${checker(
          ss,
        )}`;
      }

      timerRef.current = setTimeout(updateTimer, 1000);
    };

    updateTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isMobile]);

  return dateRef;
};
