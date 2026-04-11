/**
 * MAUDEVONGIESE.CH | initLimitScrollKontakt
 * Locks scroll height to the contact section on mobile and clears the cap on larger viewports.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

import { debounce } from "../debounce.js";

export function initLimitScrollKontakt() {
    const OPTIONS = {
        BREAKPOINT: 992,
        TARGET: '[data-section="contact"]'
    };

    const applyLimit = () => {
        const isMobile = window.innerWidth <= OPTIONS.BREAKPOINT;

        if (!isMobile) {
            document.documentElement.style.maxHeight = "";
            document.body.style.maxHeight = "";
            console.log("📱 Viewport above breakpoint, scroll lock removed.");
            return;
        }

        const section = document.querySelector(OPTIONS.TARGET);
        if (!section) return;

        const height = section.offsetTop + section.offsetHeight;

        document.documentElement.style.maxHeight = `${height}px`;
        document.body.style.maxHeight = `${height}px`;

        console.log(`🖥️ Max scroll height set to ${height}px`);
    };

    // 🥭 init
    applyLimit();

    window.addEventListener("resize", debounce(applyLimit, 200));
}