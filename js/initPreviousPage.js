/*
 * UTILITY | cookies previous page v1.1 (ES6 module)
 */

export function initPreviousPage() {
    const OPTIONS = {
        COOKIE_NAME: "previousPage",
        COOKIE_LIFETIME: 1, // days
        BACK_BUTTON_SELECTOR: '[data-btn="previous"]',
        CURRENT_PAGE: window.location.href,
        PREVIOUS_PAGE: window.Cookies?.get("previousPage") || null
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

    if (OPTIONS.PREVIOUS_PAGE !== OPTIONS.CURRENT_PAGE && window.Cookies) {
        window.Cookies.set(OPTIONS.COOKIE_NAME, OPTIONS.CURRENT_PAGE, {
            expires: OPTIONS.COOKIE_LIFETIME,
            path: "/"
        });
    }

    console.log("previous page cookie:", OPTIONS.PREVIOUS_PAGE);
}