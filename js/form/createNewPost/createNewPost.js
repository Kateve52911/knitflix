// /js/form/createNewPost/createNewPost.js - Handle DOM ready state

import { attachButtonClickHandler } from "./helpers/buttonHandler.js";

function initializeButton() {
  const createNewPostButton = document.getElementById("create-new-post");

  if (createNewPostButton) {
    attachButtonClickHandler(createNewPostButton);
  } else {
    console.error('❌ Button with ID "create-new-post" not found');
  }
}

// Check if DOM is already loaded or wait for it
if (document.readyState === "loading") {
  console.log("🔥 DOM still loading, waiting...");
  document.addEventListener("DOMContentLoaded", initializeButton);
} else {
  console.log("🔥 DOM already ready, initializing immediately");
  initializeButton();
}
