import { Hover } from "@shared/js/hover";
import { Observer } from "@shared/js/observe";
import { Scroller } from "@shared/js/scroller";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function useTextScrollEffect() {
  const canRun = typeof window !== 'undefined' && window.IntersectionObserver;

  function run() {
    setTimeout(() => {
      setTextEffect();
      if (isMobile) return;
      setScrollHoverEffect();
    }, 1000);
  }

  useEffect(() => {
    if (canRun) {
      run()
    }
  }, [canRun]);

  return { canRun, run };
}

function setTextEffect() {
  const callback = (node: any, isIntersecting: boolean) => {
    let el = node.firstChild;
    if (isIntersecting) {
      window.requestAnimationFrame(() => el.classList.add("visible"));
    } else {
      window.requestAnimationFrame(() => el.classList.remove("visible"));
    }
  };

  const o = Observer().create({ callback, offset: 0 });

  let texts = document.querySelectorAll(".split-wrapper");

  texts.forEach((text) => o.observe(text));
}

function setScrollHoverEffect() {
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