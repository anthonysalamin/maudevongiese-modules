/**
 * MAUDEVONGIESE.CH | initThumbRevealHover
 * Groups thumbnails by title and reveals overlays and details on coordinated hover.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export function initThumbRevealHover() {
    const OPTIONS = {
      THUMB_ITEMS: document.querySelectorAll('[data-id="thumb-item"]'),
      THUMB_DETAILS: '[data-id="thumb-details"]',
      THUMB_OVERLAY: '[data-id="thumb-overlay"]'
    };
  
    if (!OPTIONS.THUMB_ITEMS.length) return;
  
    // 🥭 group thumbs by title once (perf win)
    const GROUPS = {};
  
    OPTIONS.THUMB_ITEMS.forEach((thumb) => {
      const title = thumb.dataset.title;
      if (!GROUPS[title]) GROUPS[title] = [];
      GROUPS[title].push(thumb);
  
      const details = thumb.querySelector(OPTIONS.THUMB_DETAILS);
      const overlay = thumb.querySelector(OPTIONS.THUMB_OVERLAY);
  
      // initial state
      if (details) {
        gsap.set(details, { display: "none", opacity: 0 });
      }
      if (overlay) {
        gsap.set(overlay, { opacity: 0 });
      }
    });
  
    // 🥭 handlers
    const handleEnter = (title) => {
      const siblings = GROUPS[title] || [];
  
      siblings.forEach((el) => {
        const details = el.querySelector(OPTIONS.THUMB_DETAILS);
        const overlay = el.querySelector(OPTIONS.THUMB_OVERLAY);
  
        gsap.killTweensOf([details, overlay]);
  
        // overlay in
        if (overlay) {
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        }
  
        // details in
        if (details) {
          gsap.set(details, { display: "flex", opacity: 0 });
          gsap.to(details, {
            opacity: 1,
            duration: 1.5,
            delay: 0.25,
            ease: "power2.out"
          });
        }
      });
    };
  
    const handleLeave = (title) => {
      const siblings = GROUPS[title] || [];
  
      siblings.forEach((el) => {
        const details = el.querySelector(OPTIONS.THUMB_DETAILS);
        const overlay = el.querySelector(OPTIONS.THUMB_OVERLAY);
  
        gsap.killTweensOf([details, overlay]);
  
        // details out
        if (details) {
          gsap.to(details, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(details, { display: "none" });
            }
          });
        }
  
        // overlay out
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            delay: 0.15,
            ease: "power2.in"
          });
        }
      });
    };
  
    // 🥭 bind events
    OPTIONS.THUMB_ITEMS.forEach((thumb) => {
      const title = thumb.dataset.title;
  
      thumb.addEventListener("mouseenter", () => handleEnter(title));
      thumb.addEventListener("mouseleave", () => handleLeave(title));
    });
  }