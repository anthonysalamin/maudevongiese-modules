/**
 * MAUDEVONGIESE.CH | initPerspective
 * Pins top, front, and bottom surfaces with ScrollTrigger and syncs body scroll height.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export function initPerspective() {
    const SURFACES = {
        PRODUCTION: true,
        TOP: {
            ELEMENT: document.querySelector('[data-id="top"]'),
            HEIGHT_VH: 15
        },
        FRONT: {
            ELEMENT: document.querySelector('[data-id="front"]'),
            HEIGHT_VH: 70
        },
        BOTTOM: {
            ELEMENT: document.querySelector('[data-id="bottom"]'),
            HEIGHT_VH: 15
        }
    };

    if (!SURFACES.FRONT.ELEMENT) return;

    const debounce = (func, delay) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const vhToPx = (vh) => window.innerHeight * (vh / 100);
    const pxToVH = (px) => (px / window.innerHeight) * 100;

    const setBodyHeight = () => {
        const contentHeightVH = pxToVH(SURFACES.FRONT.ELEMENT.scrollHeight);

        const bodyScrollHeightVH =
            contentHeightVH -
            100 +
            SURFACES.TOP.HEIGHT_VH +
            SURFACES.BOTTOM.HEIGHT_VH;

        document.body.style.height = `${100 + bodyScrollHeightVH}vh`;
    };

    const killScrollTriggers = () => {
        if (typeof ScrollTrigger === "undefined") return;

        ScrollTrigger.getAll()
            .filter((t) => ["front", "bottom", "top"].includes(t.vars.id))
            .forEach((t) => t.kill());
    };

    const initScrollTriggers = () => {
        if (typeof ScrollTrigger === "undefined") return;

        const offsetTopPx = vhToPx(SURFACES.TOP.HEIGHT_VH);
        const offsetBottomPx = vhToPx(SURFACES.BOTTOM.HEIGHT_VH);

        const contentHeightPx = SURFACES.FRONT.ELEMENT.scrollHeight;
        const contentScrollVH = pxToVH(contentHeightPx);
        const bodyScrollPx = contentHeightPx - window.innerHeight;

        const baseTrigger = {
            trigger: SURFACES.FRONT.ELEMENT,
            start: `top top+=${offsetTopPx}`,
            end: `bottom bottom-=${offsetBottomPx}`,
            scrub: true
        };

        // TOP
        gsap.to(SURFACES.TOP.ELEMENT, {
            y: () =>
                `-${contentScrollVH -
                SURFACES.FRONT.HEIGHT_VH -
                SURFACES.BOTTOM.HEIGHT_VH
                }vh`,
            scrollTrigger: {
                id: "top",
                ...baseTrigger
            }
        });

        // FRONT
        gsap.to(SURFACES.FRONT.ELEMENT, {
            y: () => -bodyScrollPx - offsetTopPx * 2,
            scrollTrigger: {
                id: "front",
                ...baseTrigger,
                markers: !SURFACES.PRODUCTION
            }
        });

        // BOTTOM
        gsap.to(SURFACES.BOTTOM.ELEMENT, {
            y: () => `-${contentScrollVH}vh`,
            scrollTrigger: {
                id: "bottom",
                ...baseTrigger
            }
        });
    };

    // 🧠 init
    setBodyHeight();
    initScrollTriggers();

    // 🔁 resize
    window.addEventListener(
        "resize",
        debounce(() => {
            setBodyHeight();
            killScrollTriggers();
            initScrollTriggers();

            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh();
            }
        }, 200)
    );
}