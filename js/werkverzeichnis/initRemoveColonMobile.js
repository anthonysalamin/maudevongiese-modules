/**
 * MAUDEVONGIESE.CH | initRemoveColonMobile
 * Strips colon characters from Maude credits nodes when the mobile media query matches.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
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