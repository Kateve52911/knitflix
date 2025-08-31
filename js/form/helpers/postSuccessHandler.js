import { restoreCreatePostButton } from "./buttonHandler.js";
import { showSuccessMessage } from "./feedbackMessages.js";
import { refreshPostFeed } from "./postRefresher.js";

export async function handlePostSuccess(form) {
  const formContainer = form.closest(".flex.flex-col.items-center.mb-6");
  restoreCreatePostButton(formContainer);
  await refreshPostFeed();
  showSuccessMessage();
}
