
import { Observer } from "../../shared/js/observe";

export default function useTextEffect() {
  const callback = (node: any, isIntersecting: boolean) => {
    let el = node.firstChild;
    if (isIntersecting) {
      window.requestAnimationFrame(() => {
        el.classList.add("visible");
      });
    } else {
      window.requestAnimationFrame(() => {
        el.classList.remove("visible");
      });
    }
  };

  const o = Observer().create({
    callback,
    offset: 0,
  });

  let texts = document.querySelectorAll(".split-wrapper");
  texts.forEach((text) => {
    o.observe(text);
  });
}

