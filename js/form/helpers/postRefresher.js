import { fetchPosts } from "../../api/posts/getPosts.js";
import { renderAllPosts } from "../../components/renderAllPosts.js";
import { showErrorMessage, showLoadingMessage } from "./feedbackMessages.js";

export async function refreshPostFeed() {
  const postContainer = document.getElementById("all-posts-container");

  if (!postContainer) {
    console.error("Post container nor found!");
    return;
  }

  try {
    showLoadingMessage(postContainer);
    const freshPosts = await fetchPosts();
    renderAllPosts(freshPosts);
  } catch (error) {
    console.error("Error refreshing posts", error);
    showErrorMessage(postContainer);
  }
}
