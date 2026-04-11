/*
 * UTILITY | cookies previous page v1.2 (ES6 module)
 */

import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";

export function initPreviousPage() {
  const OPTIONS = {
    COOKIE_NAME: "previousPage",
    COOKIE_LIFETIME: 1, // days
    BACK_BUTTON_SELECTOR: '[data-btn="previous"]',
    CURRENT_PAGE: window.location.href,
    PREVIOUS_PAGE: Cookies.get("previousPage") || null
  };

  const backButton = document.querySelector(OPTIONS.BACK_BUTTON_SELECTOR);

  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();

      if (OPTIONS.PREVIOUS_PAGE) {
        window.location.href = OPTIONS.PREVIOUS_PAGE;
      } else {
        history.back();
      }
    });
  }

  if (OPTIONS.PREVIOUS_PAGE !== OPTIONS.CURRENT_PAGE) {
    Cookies.set(OPTIONS.COOKIE_NAME, OPTIONS.CURRENT_PAGE, {
      expires: OPTIONS.COOKIE_LIFETIME,
      path: "/"
    });
  }

  console.log("previous page cookie:", OPTIONS.PREVIOUS_PAGE);
}