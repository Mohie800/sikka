import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";

interface DOMElements {
  el: HTMLElement | null;
  titleWrap: HTMLElement | null;
  titleUp: HTMLElement | null;
  titleDown: HTMLElement | null;
  content: HTMLElement[];
  svg: HTMLElement | null;
  mask: HTMLElement | null;
  image: HTMLImageElement | SVGImageElement | null;
}

const useItem = (DOM_el: HTMLElement) => {
  useEffect(() => {
    const DOM: DOMElements = {
      el: null,
      titleWrap: null,
      titleUp: null,
      titleDown: null,
      content: [],
      svg: null,
      mask: null,
      image: null,
    };

    let flipstate: any = null;

    const init = (DOM_el: HTMLElement) => {
      // Assign DOM elements
      DOM.el = DOM_el;
      DOM.titleWrap = DOM.el.querySelector(".title-wrap");
      DOM.titleUp = DOM.titleWrap!.querySelector(".title--up");
      DOM.titleDown = DOM.titleWrap!.querySelector(".title--down");
      DOM.content = Array.from(DOM.el.querySelectorAll(".content"));
      DOM.svg = DOM.el.querySelector(".content__img");
      DOM.mask = DOM.svg!.querySelector(".mask");
      DOM.image = DOM.svg!.querySelector("image");

      if (!DOM.el || !DOM.titleWrap || !DOM.titleUp || !DOM.titleDown || !DOM.svg || !DOM.mask || !DOM.image) {
        console.error("Missing required DOM elements.");
        return;
      }

      // Save current state
      flipstate = Flip.getState([DOM.titleUp, DOM.titleDown]);

      // Change layout
      DOM.content[1].prepend(DOM.titleUp, DOM.titleDown);

      // Check if the mask element is a circle or a path
      const isCircle = DOM.mask.tagName.toLowerCase() === "circle";

      // Create the Flip.from that we'll pass into the ScrollTrigger animation property
      const flip = Flip.from(flipstate, {
        ease: "none",
        simple: true,
      })
        .fromTo(
          DOM.mask,
          {
            attr: isCircle ? { r: DOM.mask.getAttribute("r") || "0" } : { d: DOM.mask.getAttribute("d") || "" },
          },
          {
            ease: "none",
            attr: isCircle ? { r: DOM.mask.dataset.valueFinal || "0" } : { d: DOM.mask.dataset.valueFinal || "" },
          },
          0
        )
        // Also scale up the image element
        .fromTo(
          DOM.image,
          {
            transformOrigin: "50% 50%",
            filter: "brightness(100%)",
          },
          {
            ease: "none",
            scale: isCircle ? 1.2 : 1,
            filter: "brightness(150%)",
          },
          0
        );

      ScrollTrigger.create({
        trigger: DOM.titleWrap,
        start: "clamp(top bottom-=10%)",
        end: "+=40%",
        scrub: true,
        animation: flip,
      });
    };

    init(DOM_el);
  }, []);
};

export default useItem;
