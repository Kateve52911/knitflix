import { deletePost } from "../../api/posts/deletePost.js";
import { createModal } from "../../components/modal/helpers/createModal.js";
import { showPostModal } from "../../components/modal/showPostModal.js";
import { renderAllPosts } from "../../components/renderAllPosts.js";
import { createEditForm } from "../../form/editPostForm/createEditForm.js";
import { attachButtonClickHandler } from "../../form/helpers/buttonHandler.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";
import {
  initializeFilterSystem,
  refreshFilterSystem,
} from "../../components/filteringPosts/simpleFilterInit.js";

updateYear();
toggleHamburgerButton();

export let selectedPost = "";

async function initializePage() {
  try {
    await renderAllPosts();
    createModal();
    const createPostBtn = document.getElementById("create-new-post");
    if (createPostBtn) {
      attachButtonClickHandler(createPostBtn);
    }

    await initializeFilterSystem();
  } catch (error) {
    console.error("Error initializing page:", error);
  }
}

export async function refreshPostsAfterAction() {
  try {
    await refreshFilterSystem();
    await renderAllPosts();
  } catch (error) {
    console.error("Error refreshing posts:", error);
  }
}

document.addEventListener("DOMContentLoaded", initializePage);

document
  .getElementById("all-posts-container")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("view-post-button")) {
      const postId = e.target.dataset.postId;
      selectedPost = postId;
      showPostModal(postId);
    }
  });

document.addEventListener("click", async (event) => {
  if (event.target.id === "edit-post-button") {
    try {
      const formContainer = await createEditForm(selectedPost);
      const modalContent = document.getElementById("modal-content");
      modalContent.innerHTML = "";
      modalContent.appendChild(formContainer);
    } catch (error) {
      console.error("Failed to create edit form:", error);
    }
  }
});

document.addEventListener("click", async (event) => {
  if (event.target.id === "delete-post-button") {
    try {
      await deletePost();
      const modalContainer = document.getElementById("post-modal");
      modalContainer.style.display = "none";

      await refreshPostsAfterAction();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  }
});

//export { refreshPostsAfterAction };
