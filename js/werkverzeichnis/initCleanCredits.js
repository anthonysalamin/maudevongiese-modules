/**
 * MAUDEVONGIESE.CH | initCleanCredits
 * On narrow viewports, removes leading credit text before a configured name marker.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

import { debounce } from 'https://cdn.maudevongiese.ch/js/debounce.js?v=1.0.0';

export function initCleanCredits() {
    const OPTIONS = {
        SELECTOR: '[data-credits="other"]',
        MAX_WIDTH: 479,
        TARGET_TEXT: "Maude von Giese",
        PROCESSED_FLAG: "data-processed"
    };

    const cleanCredits = () => {
        if (!window.matchMedia(`(max-width: ${OPTIONS.MAX_WIDTH}px)`).matches) return;

        const elements = document.querySelectorAll(OPTIONS.SELECTOR);
        if (!elements.length) return;

        elements.forEach((el) => {
            if (el.hasAttribute(OPTIONS.PROCESSED_FLAG)) return;

            let found = false;
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            const nodesToRemove = [];

            while (walker.nextNode()) {
                const node = walker.currentNode;

                if (!found) {
                    const index = node.textContent.indexOf(OPTIONS.TARGET_TEXT);

                    if (index !== -1) {
                        node.textContent = node.textContent
                            .slice(index + OPTIONS.TARGET_TEXT.length)
                            .trimStart();

                        found = true;
                    } else {
                        nodesToRemove.push(node);
                    }
                }
            }

            nodesToRemove.forEach((node) => {
                if (node.parentNode) node.parentNode.removeChild(node);
            });

            el.setAttribute(OPTIONS.PROCESSED_FLAG, "true");
        });
    };

    // 🥭 init
    cleanCredits();

    window.addEventListener("resize", debounce(cleanCredits, 200));
}