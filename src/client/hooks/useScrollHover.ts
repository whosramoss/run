import { Scroller } from "../../shared/js/scroller";
import { Hover } from "../../shared/js/hover";


export default function useScrollHover() {
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