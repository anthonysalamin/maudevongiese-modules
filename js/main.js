/**
 * MAUDE VON GIESE | main modules
 * @build 22.09.25
 * @updated 16:39 PHT
 * @author TONYTONY Sàrl
 */

console.log(
    "%c🦄 Deploying main modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
);

// global
import { initSimpleLoading } from 'https://cdn.maudevongiese.ch/js/initSimpleLoading.js?v=1.0.0';
import { initHeadingReveal } from 'https://cdn.maudevongiese.ch/js/initHeadingReveal.js?v=1.1.0';
import { SmoothScrollManager } from 'https://cdn.maudevongiese.ch/js/SmoothScrollManager.js?v=1.0.0';
import { initPerspective } from 'https://cdn.maudevongiese.ch/js/initPerspective.js?v=1.0.0';
import { initItalicFixWidth } from 'https://cdn.maudevongiese.ch/js/initItalicFixWidth.js?v=1.0.0';
import { initToggleProjekte } from 'https://cdn.maudevongiese.ch/js/initToggleProjekte.js?v=1.0.0';
import { initMenu } from 'https://cdn.maudevongiese.ch/js/initMenu.js?v=1.0.0';
// home
import { initTypedElements } from 'https://cdn.maudevongiese.ch/js/home/initTypedElements.js?v=1.1.0';
import { initAlignThumbDetails } from 'https://cdn.maudevongiese.ch/js/home/initAlignThumbDetails.js?v=2.1.0';
import { initThumbRevealHover } from 'https://cdn.maudevongiese.ch/js/home/initThumbRevealHover.js?v=1.0.0';
import { initImagesReveal } from 'https://cdn.maudevongiese.ch/js/home/initImagesReveal.js?v=1.2.0';
// werkverzeichnis
import { initLimitScroll } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initLimitScroll.js?v=1.1.0';
import { initRemoveColonMobile } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initRemoveColonMobile.js?v=1.0.0';
// kontakt
import { initLimitScrollKontakt } from 'https://cdn.maudevongiese.ch/js/kontakt/initLimitScrollKontakt.js?v=1.2.0';

async function initApp() {
    // =========================
    // 1. DOM / UI LAYER
    // =========================
    initSimpleLoading();
    initTypedElements();
    initAlignThumbDetails();
    initThumbRevealHover();
    initImagesReveal();
    initHeadingReveal();
    initLimitScroll();
    initLimitScrollKontakt();
    initItalicFixWidth();
    initToggleProjekte();
    initMenu();
  
    // mobile-only cleanup
    initRemoveColonMobile();
  
    console.log("✅ DOM modules initialized");
  
    // =========================
    // 2. FONT DEPENDENT LAYER
    // =========================
    await document.fonts.ready;
    console.log("✅ Fonts ready");
  
    // =========================
    // 3. SCROLL ENGINE LAYER
    // =========================
    setTimeout(() => {
      new SmoothScrollManager();
      initPerspective(); // 👈 IMPORTANT: after Lenis/ScrollTrigger exist
    }, 250);
  
    console.log("✅ App fully initialized");
  }
  
  document.addEventListener("DOMContentLoaded", initApp);