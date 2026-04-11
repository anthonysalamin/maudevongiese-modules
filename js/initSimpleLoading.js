/**
 * MAUDEVONGIESE.CH | initSimpleLoading
 * Fades out the initial loader element and removes it from layout when complete.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
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
