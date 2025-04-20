import {
  clearCurrentUser,
  requireAuthentication,
} from "../../auth/sessionManager.js";
import { renderUserProfile } from "./profileRenderer.js";
import { loadUserPosts } from "./loadUserPosts.js";

function initProfilePage() {
  const currentUser = requireAuthentication();

  if (currentUser) {
    renderUserProfile(currentUser);

    loadUserPosts(currentUser.id);

    setupLogoutButton();
  }
}

function setupLogoutButton() {
  const logoutButton = document.getElementById("logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }
}

function handleLogout() {
  clearCurrentUser();
  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", initProfilePage);
