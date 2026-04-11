/**
 * MAUDEVONGIESE.CH | SmoothScrollManager
 * Initializes Lenis smooth scrolling with ScrollTrigger proxy and resize handling.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export class SmoothScrollManager {
    constructor() {
        this.lenis = null;
        this.isAnimating = false;

        this.init();
    }

    init() {
        if (typeof Lenis === "undefined") {
            console.warn("Lenis is not available");
            return;
        }

        this.lenis = new Lenis({
            smooth: true,
            duration: 1.75,
            lerp: 0.1,
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: false,
            infinite: false
        });

        window.pageScrollManager = this;
        window.lenis__pageScroll = this.lenis;

        console.log(
            window.lenis__pageScroll
                ? "lenis__pageScroll available"
                : "lenis__pageScroll error"
        );

        console.log("SmoothScrollManager initialized");

        this.startAnimation();
        this.observeContentChanges();
        this.setupScrollTrigger();
    }

    startAnimation() {
        if (this.isAnimating) return;

        this.isAnimating = true;

        const raf = (time) => {
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }

    setupScrollTrigger() {
        if (typeof ScrollTrigger === "undefined") return;

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop: (value) => {
                if (arguments.length) {
                    this.lenis.scrollTo(value, { immediate: true });
                } else {
                    return window.scrollY;
                }
            },
            getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }),
            pinType: document.body.style.transform ? "transform" : "fixed"
        });

        this.lenis.on("scroll", ScrollTrigger.update);
    }

    observeContentChanges() {
        const observer = new ResizeObserver(() => {
            this.updateScrollHeight();
        });

        observer.observe(document.body);

        const elfsight = document.querySelector(".elfsight-app");
        if (elfsight) observer.observe(elfsight);

        document.addEventListener("click", (e) => {
            if (
                e.target.matches(".eapps-linkedin-feed-load-more-button") ||
                e.target.closest(".eapps-linkedin-feed-load-more")
            ) {
                setTimeout(() => this.updateScrollHeight(), 500);
            }
        });
    }

    updateScrollHeight() {
        if (!this.lenis) return;

        this.lenis.resize();

        if (typeof ScrollTrigger !== "undefined") {
            ScrollTrigger.refresh();
        }

        console.log("Scroll height updated");
    }
}