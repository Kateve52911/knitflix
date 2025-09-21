import { attachButtonClickHandler } from "../helpers/buttonHandler.js";

function initializeButton() {
  const createNewPostButton = document.getElementById("create-new-post");

  if (createNewPostButton) {
    attachButtonClickHandler(createNewPostButton);
  } else {
    console.error('Button with ID "create-new-post" not found');
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeButton);
} else {
  initializeButton();
}
