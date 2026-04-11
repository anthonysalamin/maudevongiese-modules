/**
 * MAUDEVONGIESE.CH | initApp (contact-specific)
 * Bootstraps feature modules on DOM ready, then fonts and scroll motion after a short delay.
 * @build 24.12.25
 * @updated 00:00 PHT
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

// kontakt
import { initLimitScrollKontakt } from 'https://cdn.maudevongiese.ch/js/kontakt/initLimitScrollKontakt.js?v=1.2.1';


async function initApp() {
    // =========================
    // 1. DOM / UI LAYER
    // =========================
    initLimitScrollKontakt();

    console.log("✅ DOM Kontakt modules initialized");
}

document.addEventListener("DOMContentLoaded", initApp);