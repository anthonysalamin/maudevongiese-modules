/*
 * UTILITY | simple loading v1.0.0
 * build: 20.01.25 @17:38
 */

export function initSimpleLoading() {
    const loader = document.querySelector('[data-id="load"]');
    if (!loader) return;

    gsap.to(loader, {
        opacity: 0,
        delay: 0.35,
        duration: 1,
        ease: "power2.out",
        onComplete() {
            loader.style.display = "none";
        }
    });
}
