/*
 * MAUDE | thumb align v2.1 (ES6 module)
 */

export function initAlignThumbDetails() {
    const OPTIONS = {
        THUMB_OVERLAYS: document.querySelectorAll('[data-id="thumb-overlay"]'),
        THUMB_DETAILS: '[data-id="thumb-details"]',
        OFFSET: 40 // px
    };

    if (!OPTIONS.THUMB_OVERLAYS.length) return;

    const viewportCenter = window.innerWidth / 2;

    OPTIONS.THUMB_OVERLAYS.forEach((overlay) => {
        const details = overlay.querySelector(OPTIONS.THUMB_DETAILS);
        if (!details) return;

        const rect = overlay.getBoundingClientRect();
        const elementCenter = rect.left + rect.width / 2;

        // reset
        details.style.transform = "translateX(0)";

        if (elementCenter < viewportCenter) {
            // left side → push right
            overlay.style.justifyContent = "flex-end";
            details.style.transform = `translateX(${OPTIONS.OFFSET}px)`;
        } else {
            // right side → push left
            overlay.style.justifyContent = "flex-start";
            details.style.transform = `translateX(-${OPTIONS.OFFSET}px)`;
        }
    });
}