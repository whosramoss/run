import { Hover } from "@utils/js/hover";
import { Observer } from "@utils/js/observe";
import { Scroller } from "@utils/js/scroller";
import { msDelay, WRAPPER_TEXT_SPLIT } from "@utils/utils";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

export const useTextScrollEffect = () => {
  const textScroll =
    typeof window !== "undefined" && window.IntersectionObserver;

  function setTextScroll() {
    setTimeout(() => {
      updateTextEffect();
      if (isMobile) return;
      updateScrollHoverEffect();
    }, msDelay);
  }

  useEffect(() => {
    if (textScroll) {
      setTextScroll();
    }
  }, [textScroll]);

  return { textScroll, setTextScroll };
};

function updateTextEffect() {
  const callback = (node: any, isIntersecting: boolean) => {
    let el = node.firstChild;
    if (isIntersecting) {
      window.requestAnimationFrame(() => el.classList.add("visible"));
    } else {
      window.requestAnimationFrame(() => el.classList.remove("visible"));
    }
  };

  const o = Observer().create({ callback, offset: 0 });

  let texts = document.querySelectorAll(`.${WRAPPER_TEXT_SPLIT}`);

  texts.forEach((text) => o.observe(text));
}

function updateScrollHoverEffect() {
  const scroller = new Scroller();
  const hover = new Hover();

  let lastFrameTime = 0;
  let delta;

  const render = (elapsedTime: number) => {
    delta = elapsedTime - (lastFrameTime || 0);
    window.requestAnimationFrame(render);
    if (lastFrameTime && delta < 16) return;
    lastFrameTime = elapsedTime;
    scroller.update();
    hover.update();
  };

  window.requestAnimationFrame(render);
}
