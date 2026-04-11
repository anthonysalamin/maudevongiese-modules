/**
 * MAUDE VON GIESE | main modules
 * @build 22.09.25
 * @updated 16:39 PHT
 * @author TONYTONY Sàrl
 */

const ENV = {
    isStaging: location.hostname.endsWith(".webflow.io"),
    isProduction: location.hostname === "maudevongiese.ch"
};

console.log(
    "%c🦄 Deploying main modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;"
);

// global
import { initSimpleLoading } from 'https://cdn.maudevongiese.ch/js/initSimpleLoading.js?v=1.0.0';
import { initHeadingReveal } from 'https://cdn.maudevongiese.ch/js/initHeadingReveal.js?v=1.1.0';
import { SmoothScrollManager } from 'https://cdn.maudevongiese.ch/js/SmoothScrollManager.js?v=1.0.0';
import { initPerspective } from 'https://cdn.maudevongiese.ch/js/initPerspective.js?v=1.0.0';
import { initItalicFixWidth } from 'https://cdn.maudevongiese.ch/js/initItalicFixWidth.js?v=1.0.0';
import { initToggleProjekte } from 'https://cdn.maudevongiese.ch/js/initToggleProjekte.js?v=1.0.0';
import { initMenu } from 'https://cdn.maudevongiese.ch/js/initMenu.js?v=1.0.0';
import { initSafariBlurFix } from 'https://cdn.maudevongiese.ch/js/initSafariBlurFix.js?v=1.0.0';
import { initPreviousPage } from 'https://cdn.maudevongiese.ch/js/initPreviousPage.js?v=1.1.0';
// home
import { initTypedElements } from 'https://cdn.maudevongiese.ch/js/home/initTypedElements.js?v=1.1.0';
import { initAlignThumbDetails } from 'https://cdn.maudevongiese.ch/js/home/initAlignThumbDetails.js?v=2.1.0';
import { initThumbRevealHover } from 'https://cdn.maudevongiese.ch/js/home/initThumbRevealHover.js?v=1.0.0';
import { initImagesReveal } from 'https://cdn.maudevongiese.ch/js/home/initImagesReveal.js?v=1.2.0';
// werkverzeichnis
import { initLimitScroll } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initLimitScroll.js?v=1.1.1';
import { initRemoveColonMobile } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initRemoveColonMobile.js?v=1.0.0';
import { initCleanCredits } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initCleanCredits.js?v=1.1.1';
import { initTrimCreditsBefore } from 'https://cdn.maudevongiese.ch/js/werkverzeichnis/initTrimCreditsBefore.js?v=1.0.1';
// kontakt
import { initLimitScrollKontakt } from 'https://cdn.maudevongiese.ch/js/kontakt/initLimitScrollKontakt.js?v=1.2.1';


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
    initSafariBlurFix();
    initPreviousPage();
    initCleanCredits();
    initTrimCreditsBefore();
    initRemoveColonMobile();

    console.log("✅ DOM modules initialized");

    // =========================
    // 2. FONT DEPENDENT LAYER
    // =========================
    await document.fonts.ready;
    console.log("✅ Fonts ready");

    // =========================
    // 3. SCROLL / MOTION ENGINE
    // =========================
    setTimeout(() => {
        new SmoothScrollManager();
        initPerspective();

        console.log("✅ Motion engine initialized");

        // =========================
        // 4. DEV TOOLS
        // =========================
        if (ENV.isStaging) {
            import('https://cdn.maudevongiese.ch/js/FPSMonitor.js?v=1.1.0')
                .then(({ FPSMonitor }) => {
                    const fps = new FPSMonitor();
                    fps.init();
                });
        }
    }, 250);

    console.log("🚀 App fully initialized");
}

document.addEventListener("DOMContentLoaded", initApp);