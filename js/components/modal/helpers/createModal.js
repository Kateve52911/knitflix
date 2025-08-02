export function createModal() {
  const modal = document.createElement("div");
  modal.id = "post-modal";
  modal.className = "fixed inset-0 bg-accent-plum bg-opacity-50 hidden z-50 ";

  const modalWrapper = document.createElement("div");
  modalWrapper.className = "flex flex-col w-xl items-center";

  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.className =
    "m-8 rounded-lg bg-accent-plum px-11 py-11 flex flex-col items-center justify-center relative";

  modalWrapper.appendChild(modalContent);
  modal.appendChild(modalWrapper);
  document.body.appendChild(modal);
}
