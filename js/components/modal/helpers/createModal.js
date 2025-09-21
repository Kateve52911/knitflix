/**
 * Creates and appends a modal dialog to the document body with predefined styling.
 *
 * @description Creates a three-layer modal structure:
 * - Outer modal container with backdrop overlay (initially hidden)
 * - Middle wrapper for centering and scroll handling
 * - Inner content container where modal content should be added
 *
 * The modal is created with ID 'post-modal' and is initially hidden.
 * Content should be added to the element with ID 'modal-content'.
 *
 * @returns {HTMLDivElement} The outer modal element that was created and appended to the body
 *
 * @example
 * const modal = createModal();
 * const content = document.getElementById('modal-content');
 * content.innerHTML = '<h2>My Modal Title</h2>';
 * modal.classList.remove('hidden'); // Show the modal
 */

export function createModal() {
  const modal = document.createElement("div");
  modal.id = "post-modal";
  modal.className =
    "fixed inset-0 bg-accent-plum bg-opacity-50 hidden z-50 overflow-y-auto"; // Allows scrolling the entire modal

  const modalWrapper = document.createElement("div");
  modalWrapper.className = "flex flex-col w-xl items-center min-h-full py-8"; // Ensures proper spacing for scrolling

  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.className =
    "m-8 rounded-lg bg-accent-plum px-11 py-11 flex flex-col items-center justify-center relative"; // Keep original - no height restrictions

  modalWrapper.appendChild(modalContent);
  modal.appendChild(modalWrapper);
  document.body.appendChild(modal);
  return modal;
}
