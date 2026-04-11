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

import { initSimpleLoading } from 'https://cdn.maudevongiese.ch/js/initSimpleLoading.js?v=1.0.0';


// on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    // critical
    initSimpleLoading();

    // font-dependent
    document.fonts.ready.then(() => {
        console.log(`✅ Initialized all font-dependent modules`);
    });

    console.log(`✅ Initialized all DOM-dependent modules`);
});
