/**
 * MAUDEVONGIESE.CH | initItalicFixWidth
 * Measures italic spans in the nav overlay and pins parent widths to avoid jitter.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export function initItalicFixWidth() {
    const OPTIONS = {
        OVERLAY: '[data-id="nav-overlay"]',
        LINKS: '[data-id="projekte-links"]',
        ITALIC_ELEMENTS: '[data-id="italic"]'
    };

    const overlay = document.querySelector(OPTIONS.OVERLAY);
    if (!overlay) return;

    // 🧠 utility: measure hidden elements safely
    const withTemporaryStyle = (el, fn, display = "block") => {
        const prev = {
            display: el.style.display,
            visibility: el.style.visibility,
            position: el.style.position
        };

        el.style.display = display;
        el.style.visibility = "hidden";
        el.style.position = "absolute";

        fn();

        el.style.display = prev.display;
        el.style.visibility = prev.visibility;
        el.style.position = prev.position;
    };

    withTemporaryStyle(overlay, () => {
        const links = overlay.querySelectorAll(OPTIONS.LINKS);

        links.forEach((link) => {
            withTemporaryStyle(link, () => {
                const italics = link.querySelectorAll(OPTIONS.ITALIC_ELEMENTS);

                italics.forEach((el) => {
                    const width = el.getBoundingClientRect().width;
                    const parent = el.parentElement;

                    if (!parent) return;

                    parent.style.display = "inline-block";
                    parent.style.width = `${width}px`;
                });
            }, "flex");
        });
    });
}