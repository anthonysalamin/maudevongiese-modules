/*
 * MAUDE | toggle projekte v2.4 (ES6 module)
 */

export function initToggleProjekte() {
    const OPTIONS = {
      HAMBURGER: document.querySelector('[data-id="hamburger"]'),
      BUTTON: document.querySelector('[data-btn="projekte"]'),
      LINKS: document.querySelector('[data-id="projekte-links"]'),
      ITALIC_ITEMS: document.querySelectorAll('[data-id="italic"]'),
      COLOR: {
        HOVER: "var(--gray)",
        CLICKED: "var(--gray-dark)"
      },
      EASING: "power2.out",
      DURATION: 0.4,
      STAGGER: 0.1
    };
  
    if (!OPTIONS.BUTTON || !OPTIONS.LINKS) return;
  
    let isVisible = false;
    const originalColor = getComputedStyle(OPTIONS.BUTTON).color;
  
    const openMenu = () => {
      gsap.set(OPTIONS.LINKS, { display: "flex" });
  
      gsap.to(OPTIONS.LINKS, {
        opacity: 1,
        duration: OPTIONS.DURATION,
        ease: OPTIONS.EASING
      });
  
      gsap.fromTo(
        OPTIONS.ITALIC_ITEMS,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: OPTIONS.DURATION,
          ease: OPTIONS.EASING,
          stagger: OPTIONS.STAGGER
        }
      );
  
      gsap.set(OPTIONS.BUTTON, {
        color: OPTIONS.COLOR.CLICKED,
        overwrite: true
      });
  
      isVisible = true;
    };
  
    const closeMenu = () => {
      gsap.to(OPTIONS.LINKS, {
        opacity: 0,
        duration: OPTIONS.DURATION - 0.1,
        ease: OPTIONS.EASING,
        onComplete: () => {
          gsap.set(OPTIONS.LINKS, { display: "none" });
        }
      });
  
      gsap.set(OPTIONS.BUTTON, {
        color: originalColor,
        overwrite: true
      });
  
      isVisible = false;
    };
  
    // 🧠 events
    OPTIONS.BUTTON.addEventListener("click", () => {
      isVisible ? closeMenu() : openMenu();
    });
  
    OPTIONS.HAMBURGER?.addEventListener("click", () => {
      if (isVisible) closeMenu();
    });
  
    OPTIONS.BUTTON.addEventListener("mouseenter", () => {
      if (!isVisible) {
        gsap.set(OPTIONS.BUTTON, {
          color: OPTIONS.COLOR.HOVER,
          overwrite: true
        });
      }
    });
  
    OPTIONS.BUTTON.addEventListener("mouseleave", () => {
      if (!isVisible) {
        gsap.set(OPTIONS.BUTTON, {
          color: originalColor,
          overwrite: true
        });
      }
    });
  }