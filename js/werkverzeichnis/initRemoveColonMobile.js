/*
 * UTILITY | remove ":" on mobile (ES6 module)
 */

export function initRemoveColonMobile() {
    const OPTIONS = {
        TARGETS: document.querySelectorAll('[data-credits="maude"]'),
        QUERY: "(max-width: 479px)"
    };

    if (!window.matchMedia(OPTIONS.QUERY).matches) return;
    if (!OPTIONS.TARGETS.length) return;

    OPTIONS.TARGETS.forEach((el) => {
        if (!el.textContent) return;
        el.textContent = el.textContent.replace(/:/g, "");
    });
}