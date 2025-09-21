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
    const modalContent = document.getElementById("modal-content");

    if (modalContent) {
      modalContent.innerHTML = "";
    }

    modal.classList.remove("hidden");

    const postData = await fetchSinglePost(postId);

    renderViewModal(postData);
  } catch (error) {
    console.error("Error:", error);
  }
}
