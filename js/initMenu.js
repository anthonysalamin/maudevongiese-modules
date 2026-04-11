/**
 * MAUDEVONGIESE.CH | initMenu
 * Toggles the navigation overlay, background blur, and staggered menu link motion.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export function initMenu() {
    const OPTIONS = {
        HAMBURGER: document.querySelector('[data-id="hamburger"]'),
        NAV_OVERLAY: document.querySelector('[data-id="nav-overlay"]'),
        BLUR_ELEMENTS: document.querySelectorAll('[data-blur="true"]'),
        HAMBURGER_LINE: document.querySelector('[data-id="hamburger-line-vertical"]'),
        MENU_LINKS: document.querySelectorAll('[data-id="menu-link"]'),

        EASING_IN: "power2.in",
        EASING_OUT: "power2.out",
        DURATION_IN: 0.3,
        DURATION_OUT: 0.4,
        STAGGER: 0.1
    };

    if (!OPTIONS.HAMBURGER || !OPTIONS.NAV_OVERLAY) return;

    let isOpen = false;

    const openMenu = () => {
        gsap.set(OPTIONS.NAV_OVERLAY, { display: "flex" });

        gsap.to(OPTIONS.NAV_OVERLAY, {
            opacity: 1,
            duration: OPTIONS.DURATION_OUT,
            ease: OPTIONS.EASING_OUT
        });

        gsap.to(OPTIONS.BLUR_ELEMENTS, {
            delay: 0.15,
            filter: "blur(15px)",
            duration: OPTIONS.DURATION_OUT,
            ease: OPTIONS.EASING_OUT
        });

        gsap.to(OPTIONS.HAMBURGER_LINE, {
            rotate: 90,
            duration: OPTIONS.DURATION_OUT,
            ease: OPTIONS.EASING_OUT
        });

        gsap.set(OPTIONS.MENU_LINKS, { opacity: 0, y: 10 });

        gsap.to(OPTIONS.MENU_LINKS, {
            opacity: 1,
            y: 0,
            duration: OPTIONS.DURATION_OUT,
            delay: 0.3,
            ease: OPTIONS.EASING_OUT,
            stagger: OPTIONS.STAGGER
        });

        isOpen = true;
    };

    const closeMenu = () => {
        gsap.to(OPTIONS.NAV_OVERLAY, {
            opacity: 0,
            duration: OPTIONS.DURATION_IN,
            ease: OPTIONS.EASING_IN,
            onComplete: () => {
                gsap.set(OPTIONS.NAV_OVERLAY, { display: "none" });
            }
        });

        gsap.to(OPTIONS.BLUR_ELEMENTS, {
            filter: "blur(0px)",
            duration: OPTIONS.DURATION_IN,
            ease: OPTIONS.EASING_IN
        });

        gsap.to(OPTIONS.HAMBURGER_LINE, {
            rotate: 0,
            duration: OPTIONS.DURATION_IN,
            ease: OPTIONS.EASING_IN
        });

        gsap.set(OPTIONS.MENU_LINKS, { opacity: 0 });

        isOpen = false;
    };

    OPTIONS.HAMBURGER.addEventListener("click", () => {
        isOpen ? closeMenu() : openMenu();
    });
}