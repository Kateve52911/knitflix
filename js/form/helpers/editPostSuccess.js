import { showEditSuccessMessage } from "./feedbackMessages.js";
import { refreshPostFeed } from "./postRefresher.js";

export async function handleEditSuccess(form) {
  // Remove the entire modal (Level 4 from our debug output)
  const modalBackdrop = form.closest('div[class*="fixed"][class*="inset-0"]');

  if (modalBackdrop) {
    console.log("Removing entire modal");
    modalBackdrop.remove();
  } else {
    console.log("Fallback: removing edit container only");
    const editContainer = form.closest(".bg-accent-sageGreen");
    if (editContainer) {
      editContainer.remove();
    }
  }

  await refreshPostFeed();
  showEditSuccessMessage();
}
