/**
 * MAUDEVONGIESE.CH | initSafariBlurFix
 * Disables blur and backdrop-filter on Safari for elements flagged in the DOM.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
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