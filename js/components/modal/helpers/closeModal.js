export function closeModal() {
  const modal = document.getElementById("post-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}
