import { lerp } from "@utils/utils";
import { Observer } from "./observe";

export class Hover {
  constructor() {
    this.mouse = {
      current: {
        x: 0,
        y: 0,
        r: 0.5,
      },
      target: {
        x: 0,
        y: 0,
        r: 0.5,
      },
      moveX: 0,
      moveY: 0,
    };

    this.crsr = document.getElementById("cursor");
    this.links = document.querySelectorAll(".link");
    this.move = document.querySelectorAll(".move");
    this.moveToggle = false;

    this.observe();
    this.listen();
  }

  observe() {
    const callback = (node, isIntersecting, unobserve) =>
      (this.moveToggle = isIntersecting);
    this.o = Observer().create({ callback, offset: 0 });
    this.move.forEach((el) => this.o.observe(el));
  }

  setCurrentMouse(value) {
    this.mouse.current.r = value;
  }

  removeCursorHoverClass() {
    window.requestAnimationFrame(() => {
      this.crsr.classList.remove("hover");
    });
  }

  addCursorHoverClass() {
    window.requestAnimationFrame(() => {
      this.crsr.classList.add("hover");
    });
  }

  listen() {
    window.addEventListener(
      "mousemove",
      (move) => {
        this.mouse.current.x = move.clientX;
        this.mouse.current.y = move.clientY;
      },
      { passive: true },
    );

    window.addEventListener("mousedown", (event) => {
      this.setCurrentMouse(1.3);
      this.removeCursorHoverClass();
    });

    window.addEventListener("mouseup", (event) => {
      this.setCurrentMouse(0.5);
    });

    this.links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        this.setCurrentMouse(1.3);
        this.addCursorHoverClass();
      });
      link.addEventListener("mouseleave", () => {
        this.setCurrentMouse(0.5);
        this.removeCursorHoverClass();
      });
    });
  }

  update() {
    this.mouse.target.x = lerp(this.mouse.target.x, this.mouse.current.x, 0.1);
    this.mouse.target.y = lerp(this.mouse.target.y, this.mouse.current.y, 0.1);
    this.mouse.target.r = lerp(this.mouse.target.r, this.mouse.current.r, 0.1);
    const size = 18;
    this.crsr.style.transform = `matrix(${this.mouse.target.r}, 0, 0, ${
      this.mouse.target.r
    }, ${this.mouse.target.x - size}, ${this.mouse.target.y - size})`;
  }
}
