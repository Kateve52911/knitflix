import { fetchSinglePost } from "../../api/posts/getSingePost.js";
import { createModal } from "./helpers/createModal.js";
import { renderViewModal } from "./helpers/renderingModalHTML.js";

export async function showPostModal(postId) {
  try {
    const modal = document.getElementById("post-modal");

    if (!modal) {
      createModal();
      return;
    }
    //const modal = document.getElementById("post-modal");
    const modalContent = document.getElementById("modal-content");

    // Show modal
    modal.classList.remove("hidden");

    // Fetch data
    const postData = await fetchSinglePost(postId);

    // Populate modal
    renderViewModal(postData);
  } catch (error) {
    console.error("Error:", error);
  }
}
