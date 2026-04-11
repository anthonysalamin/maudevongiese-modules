/**
 * MAUDEVONGIESE.CH | initTrimCreditsBefore
 * On small screens, keeps only the credit text before a marker name and drops the rest.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

import { debounce } from "../debounce.js";

export function initTrimCreditsBefore() {
    const OPTIONS = {
        SELECTOR: '[data-credits="maude"]',
        MAX_WIDTH: 479,
        TARGET_TEXT: "Maude von Giese",
        PROCESSED_FLAG: "data-processed"
    };

    const trimAfterMatch = () => {
        if (!window.matchMedia(`(max-width: ${OPTIONS.MAX_WIDTH}px)`).matches) return;

        const elements = document.querySelectorAll(OPTIONS.SELECTOR);
        if (!elements.length) return;

        elements.forEach((el) => {
            if (el.hasAttribute(OPTIONS.PROCESSED_FLAG)) return;

            let found = false;
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            const nodesToRemove = [];
            let shouldTrim = false;

            while (walker.nextNode()) {
                const node = walker.currentNode;

                if (!found) {
                    const index = node.textContent.indexOf(OPTIONS.TARGET_TEXT);

                    if (index !== -1) {
                        node.textContent = node.textContent
                            .slice(0, index)
                            .trimEnd();

                        found = true;
                        shouldTrim = true;
                    }
                } else if (shouldTrim) {
                    nodesToRemove.push(node);
                }
            }

            nodesToRemove.forEach((node) => {
                if (node.parentNode) node.parentNode.removeChild(node);
            });

            el.setAttribute(OPTIONS.PROCESSED_FLAG, "true");
        });
    };

    // 🥭 init
    trimAfterMatch();

    window.addEventListener("resize", debounce(trimAfterMatch, 200));
}