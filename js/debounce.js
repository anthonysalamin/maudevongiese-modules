/**
 * MAUDEVONGIESE.CH | debounce
 * Returns a debounced wrapper that runs the callback after the delay settles.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}
