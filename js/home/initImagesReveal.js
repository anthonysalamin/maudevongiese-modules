/*
 * UTILITY | images stagger reveal v1.2 (ES6 module)
 */

export function initImagesReveal() {
    const OPTIONS = {
        SELECTORS: [
            '[data-id="front"] .thumb__item',
            '[data-id="bottom"] .thumb__item'
        ],
        FADE: {
            DURATION: 1.45,
            DELAY: 0.65,
            STAGGER: 0.265,
            EASE: "power2.out"
        },
        MOVE: {
            DURATION: 1.4,
            EASE: "power3.out"
        }
    };

    OPTIONS.SELECTORS.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        // initial state
        gsap.set(elements, { opacity: 0, y: 100 });

        // opacity animation
        gsap.to(elements, {
            opacity: 1,
            duration: OPTIONS.FADE.DURATION,
            delay: OPTIONS.FADE.DELAY,
            ease: OPTIONS.FADE.EASE,
            stagger: OPTIONS.FADE.STAGGER
        });

        // y animation
        gsap.to(elements, {
            y: 0,
            duration: OPTIONS.MOVE.DURATION,
            delay: OPTIONS.FADE.DELAY,
            ease: OPTIONS.MOVE.EASE,
            stagger: OPTIONS.FADE.STAGGER
        });
    });
}