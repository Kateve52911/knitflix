import { showEditSuccessMessage } from "./feedbackMessages.js";
import { refreshPostFeed } from "./postRefresher.js";

export async function handleEditSuccess(form) {
  const modalBackdrop = form.closest('div[class*="fixed"][class*="inset-0"]');

  if (modalBackdrop) {
    modalBackdrop.remove();
  } else {
    const editContainer = form.closest(".bg-accent-sageGreen");
    if (editContainer) {
      editContainer.remove();
    }
  }

  await refreshPostFeed();
  showEditSuccessMessage();
}
