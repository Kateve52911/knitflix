import { deletePost } from "../../api/posts/deletePost.js";
import { fetchSinglePost } from "../../api/posts/getSingePost.js";
import { createModal } from "../../components/modal/helpers/createModal.js";
import { showPostModal } from "../../components/modal/showPostModal.js";
import { renderAllPosts } from "../../components/renderAllPosts.js";
import { createPostForm } from "../../form/createNewPost/createNewForm.js";
import { createEditForm } from "../../form/editPostForm/createEditForm.js";
import { attachButtonClickHandler } from "../../form/helpers/buttonHandler.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

updateYear();

toggleHamburgerButton();

await renderAllPosts();

createModal();

const createPostBtn = document.getElementById("create-new-post");
if (createPostBtn) {
  attachButtonClickHandler(createPostBtn);
}

export let selectedPost = "";

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
    const formContainer = await createEditForm(selectedPost);
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";
    modalContent.appendChild(formContainer);
  }
});

document.addEventListener("click", async (event) => {
  if (event.target.id === "delete-post-button") {
    try {
      await deletePost();
      const modalContainer = document.getElementById("post-modal");
      modalContainer.style.display = "none";

      location.reload();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  }
});
