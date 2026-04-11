/**
 * MAUDEVONGIESE.CH | initTypedElements
 * Types out footer info copy with Typed.js on viewports at or above the desktop breakpoint.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

import Typed from "https://cdn.jsdelivr.net/npm/typed.js@2.1.0/+esm";

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