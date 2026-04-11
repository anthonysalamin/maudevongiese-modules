/*
 * UTILITY | typed elements v1.1 (ES6 module)
 */

import Typed from "https://cdn.jsdelivr.net/npm/typed.js@2.0.16/dist/typed.esm.js";

export function initTypedElements() {
  const OPTIONS = {
    TARGETS: document.querySelectorAll('[data-id="info-bottom"]'),
    TOTAL_DURATION: 850
  };

  if (window.innerWidth < 992) {
    console.log("skipping typed elements");
    return;
  }

  OPTIONS.TARGETS.forEach((el) => {
    const text = el.textContent.trim();
    if (!text.length) return;

    el.textContent = "";

    const typeSpeed = OPTIONS.TOTAL_DURATION / text.length;

    new Typed(el, {
      strings: [text],
      typeSpeed,
      backSpeed: 25,
      showCursor: false
    });
  });
}