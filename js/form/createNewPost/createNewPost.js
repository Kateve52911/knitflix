// /js/form/createNewPost/createNewPost.js - Handle DOM ready state
console.log("🔥 createNewPost.js file is loading!");

import { attachButtonClickHandler } from "./helpers/buttonHandler.js";

function initializeButton() {
  console.log("🔥 Initializing button...");

  const createNewPostButton = document.getElementById("create-new-post");
  console.log("🔥 Button found:", createNewPostButton);
  console.log("Button HTML:", createNewPostButton?.outerHTML);

  if (createNewPostButton) {
    console.log("✅ Button found, calling attachButtonClickHandler");
    attachButtonClickHandler(createNewPostButton);
  } else {
    console.error('❌ Button with ID "create-new-post" not found');
    console.log("All buttons on page:", document.querySelectorAll("button"));
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
