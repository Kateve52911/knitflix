export function renderViewModal(postData) {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = "";

  const modalTitle = document.createElement("h2");
  modalTitle.className =
    "text-text-dark font-body text-center font-bold text-lg";
  modalTitle.innerHTML = postData.data.title;

  modalContent.appendChild(modalTitle);
}
