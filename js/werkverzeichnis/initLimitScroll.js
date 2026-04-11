/*
 * UTILITY | limit scroll v1.1 (ES6 module)
 */

export function initLimitScroll() {
    const OPTIONS = {
        TARGET: '[data-section="werkverzeichnis"]'
    };

    const section = document.querySelector(OPTIONS.TARGET);
    if (!section) return;

    const updateMaxHeight = () => {
        const height = section.offsetTop + section.offsetHeight;

        document.documentElement.style.maxHeight = `${height}px`;
        document.body.style.maxHeight = `${height}px`;

        console.log(`🖥️ Max scroll height set to ${height}px`);
    };

    // 🥭 init
    updateMaxHeight();

    // 🥭 resize (debounced)
    window.addEventListener(
        "resize",
        debounce(() => {
            updateMaxHeight();
            console.log("🔁 Resized: max scroll height updated");
        }, 200)
    );
}