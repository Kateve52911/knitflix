import { createModal } from "../../components/modal/helpers/createModal.js";
import { showPostModal } from "../../components/modal/showPostModal.js";
import { renderAllPosts } from "../../components/renderAllPosts.js";
import { attachButtonClickHandler } from "../../form/createNewPost/helpers/buttonHandler.js";
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

document
  .getElementById("all-posts-container")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("view-post-button")) {
      const postId = e.target.dataset.postId;
      showPostModal(postId);
    }
  });
