export function createModal() {
  const modal = document.createElement("div");
  modal.id = "post-modal";
  modal.className =
    "fixed inset-0 bg-brand-light bg-opacity-50 hidden z-50 flex items-center justify-center";

  const modalWrapper = document.createElement("div");
  modalWrapper.className = "m-2 rounded-lg bg-accent-plum p-4";

  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";

  const closeButton = document.createElement("button");
  closeButton.className =
    "fa-solid fa-xmark text-3xl text-brand-light absolute top-2 right-2 hover:text-brand-medium ";
  closeButton.onclick = closeModal;

  modalWrapper.appendChild(modalContent);
  modalWrapper.appendChild(closeButton);
  modal.appendChild(modalWrapper);
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.getElementById("post-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}
