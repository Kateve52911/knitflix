import { renderAllPosts } from "../../components/renderAllPosts.js";
import { showErrorMessage, showLoadingMessage } from "./feedbackMessages.js";

export async function refreshPostFeed() {
  const postContainer = document.getElementById("all-posts-container");
  if (!postContainer) {
    console.error("Post container not found!");
    return;
  }

  try {
    showLoadingMessage(postContainer);
    await renderAllPosts("all-posts-container");
  } catch (error) {
    console.error("Error refreshing posts", error);
    showErrorMessage(postContainer);
  }
}
