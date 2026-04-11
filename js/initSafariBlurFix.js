/*
 * UTILITY | remove blur filter on safari (ES6 module)
 */

export function initSafariBlurFix() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!isSafari) return;

    const elements = document.querySelectorAll('[data-filter="blur"]');
    if (!elements.length) return;

    elements.forEach((el) => {
        el.style.filter = "none";
        el.style.backdropFilter = "none";
    });
}