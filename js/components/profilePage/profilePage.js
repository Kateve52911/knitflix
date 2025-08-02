// import {
//   clearCurrentUser,
//   requireAuthentication,
// } from "../../auth/sessionManager.js";
// import { renderUserProfile } from "./profileRenderer.js";
// import { loadUserPosts } from "./loadUserPosts.js";

// export function initProfilePage() {
//   const currentUser = requireAuthentication();

//   if (currentUser) {
//     renderUserProfile(currentUser);

//     loadUserPosts(currentUser.id);

//     setupLogoutButton();
//   }
// }

// function setupLogoutButton() {
//   const logoutButton = document.getElementById("logout-button");

//   if (logoutButton) {
//     logoutButton.addEventListener("click", handleLogout);
//   }
// }

// function handleLogout(event) {
//   if (event) event.preventDefault();

//   clearCurrentUser();

//   window.location.replace("../index.html");
//   return false;
// }

// document.addEventListener("DOMContentLoaded", initProfilePage);
