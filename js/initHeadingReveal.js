/*
 * UTILITY | heading wobbly reveal v1.1 (ES6 module)
 */

export function initHeadingReveal() {
    const OPTIONS = {
        HEADING: document.querySelector('[data-heading="headline"]'),
        DELAY: 0.35,
        GSAP_OPACITY: { DURATION: 0.3, EASE: "power2.out" },
        GSAP_ANIMATION: {
            Y: 5,
            ROTATION: 6,
            STAGGER: 0.05,
            DURATION: 0.65,
            EASE: "power3.out"
        }
    };

    if (!OPTIONS.HEADING) return;

    const split = new SplitType(OPTIONS.HEADING, { types: "chars" });

    // fade in container
    gsap.fromTo(
        OPTIONS.HEADING,
        { opacity: 0 },
        {
            opacity: 1,
            duration: OPTIONS.GSAP_OPACITY.DURATION,
            ease: OPTIONS.GSAP_OPACITY.EASE,
            delay: OPTIONS.DELAY
        }
    );

    // chars animation
    gsap.from(split.chars, {
        opacity: 0,
        y: OPTIONS.GSAP_ANIMATION.Y,
        rotation: OPTIONS.GSAP_ANIMATION.ROTATION,
        stagger: OPTIONS.GSAP_ANIMATION.STAGGER,
        duration: OPTIONS.GSAP_ANIMATION.DURATION,
        ease: OPTIONS.GSAP_ANIMATION.EASE,
        delay: OPTIONS.DELAY
    });
}