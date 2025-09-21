/**
 * Updates the current year display in the DOM
 * @returns {void}
 * @example
 * ```js
 * // HTML: <span id="current-year"></span>
 * updateYear();
 * // The span will now display the current year (e.g., "2025")
 * ```
 */

export function updateYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
}
