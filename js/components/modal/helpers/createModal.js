// export function createModal() {
//   const modal = document.createElement("div");
//   modal.id = "post-modal";
//   modal.className =
//     "fixed inset-0 bg-accent-plum bg-opacity-50 hidden z-50 overflow-y-auto"; // Keep just this overflow

//   const modalWrapper = document.createElement("div");
//   modalWrapper.className = "flex flex-col w-xl items-center min-h-full py-8"; // Keep this

//   const modalContent = document.createElement("div");
//   modalContent.id = "modal-content";
//   modalContent.className =
//     "m-8 rounded-lg bg-accent-plum px-11 py-11 flex flex-col items-center justify-center relative"; // Back to original - no max-height here

//   modalWrapper.appendChild(modalContent);
//   modal.appendChild(modalWrapper);
//   document.body.appendChild(modal);
//   return modal;
// }
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
