import { lerp, SCROLL_CONTENT_ID } from "@utils/utils";
import { Observer } from "./observe";

export class Scroller {
  constructor() {
    this.targetScroll = 0;
    this.curScroll = 0;
    this.imgToggle = true;
    this.shouldUpdate = false;

    this.body = document.body;
    this.img = document.querySelector("img");
    this.scrollContent = document.getElementById(SCROLL_CONTENT_ID);
    this.body.style.height = `${this.scrollContent.scrollHeight}px`;

    this.observe();
    this.listen();
    this.scrollspy();
  }

  observe() {
    const callback = (node, isIntersecting, unobserve) => {
      this.imgToggle = isIntersecting;
    };

    this.o = Observer().create({
      callback,
      offset: 5,
    });

    this.o.observe(this.img);
  }

  listen() {
    window.addEventListener(
      "scroll",
      () => {
        this.curScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        this.shouldUpdate = true;
      },
      {
        passive: true,
      },
    );

    window.addEventListener("resize", () => { }, { passive: true });
  }

  scrollspy() {
    this.links = document.querySelectorAll(".nav-link");
    this.links.forEach((link) => {
      link.addEventListener("click", () => {
        let offset = document.getElementById(link.dataset.scrollspy).offsetTop;
        document.documentElement.scrollTop = offset;
      });
    });
  }

  animComplete() {
    return Math.round(this.curScroll) == Math.round(this.targetScroll);
  }

  update() {
    if (!this.shouldUpdate && this.animComplete()) return;
    this.targetScroll = Math.max(
      lerp(this.targetScroll, this.curScroll, 0.1),
      0.0001,
    );

    this.scrollContent.style.transform = `
      translateY(${-1 * this.targetScroll}px)
    `;

    this.shouldUpdate = false;
  }
}
