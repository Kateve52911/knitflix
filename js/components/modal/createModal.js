// export function createModal() {
//   const modal = document.createElement("div");
//   modal.id = "post-modal";
//   modal.className =
//     "fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center";

//   const modalWrapper = document.createElement("div");
//   modalWrapper.className = "m-2 rounded-lg bg-colors-accent-plum";
// }

// document
//   .getElementById("all-posts-container")
//   .addEventListener("click", (e) => {
//     if (e.target.classList.contains("view-post-btn")) {
//       const postId = e.target.dataset.postId;
//       showPostModal(postId);
//     }
//   });

export function createModal() {
  // Remove 'post' parameter
  console.log("createModal() called");
  const modal = document.createElement("div");
  modal.id = "post-modal";
  modal.className =
    "fixed inset-0 bg-brand-light bg-opacity-50 hidden z-50 flex items-center justify-center";

  const modalWrapper = document.createElement("div");
  modalWrapper.className = "m-2 rounded-lg bg-accent-plum p-4";

  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";

  const closeButton = document.createElement("button");
  closeButton.className =
    "fa-solid fa-xmark text-3xl text-brand-light absolute top-2 right-2 hover:text-brand-medium ";
  closeButton.onclick = closeModal;

  modalWrapper.appendChild(modalContent);
  modalWrapper.appendChild(closeButton);
  modal.appendChild(modalWrapper);
  document.body.appendChild(modal);

  console.log("Modal added to DOM:", document.getElementById("post-modal"));
}

// Simple function to show the modal
function showPostModal(postId) {
  const modal = document.getElementById("post-modal");
  modal.classList.remove("hidden"); // Remove 'hidden' class to show modal
  console.log("Showing modal for post:", postId);
}

document.addEventListener("DOMContentLoaded", createModal);

// Remove createModal() from the click handler
document
  .getElementById("all-posts-container")
  .addEventListener("click", (e) => {
    console.log("Click detected on:", e.target);
    if (e.target.classList.contains("view-post-button")) {
      // This class needs to match your button
      console.log("View post button clicked!");
      const postId = e.target.dataset.postId;
      showPostModal(postId);
    }
  });

function closeModal() {
  const modal = document.getElementById("post-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}
