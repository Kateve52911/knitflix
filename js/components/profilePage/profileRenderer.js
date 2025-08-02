// import { posts } from "../../utils/source/posts.js";

// export function renderUserProfile(user) {
//   setPageTitle(user.username);
//   populateProfileInfo(user);
//   setProfileImage(user);
//   updateUserStats(user);
// }

// function setPageTitle(username) {
//   document.title = `${username} | Knitflix`;
// }

// function populateProfileInfo(user) {
//   document.querySelectorAll(".profile-username").forEach((element) => {
//     element.textContent = user.username;
//   });

//   document.querySelectorAll(".profile-name").forEach((element) => {
//     element.textContent = user.name;
//   });

//   document.querySelectorAll(".profile-description").forEach((element) => {
//     element.textContent = user.description;
//   });
// }

// function setProfileImage(user) {
//   document.querySelectorAll(".profile-avatar").forEach((element) => {
//     element.src = user.avatarScr;
//     element.alt = user.avatarAlt || `${user.username}'s profile picture`;
//   });
// }

// function updateUserStats(user) {
//   const userPosts = posts.filter((posts) => posts.userId === user.id);
//   document.querySelectorAll(".profile-followers").forEach((element) => {
//     element.textContent = user.followers;
//   });

//   document.querySelectorAll(".profile-following").forEach((element) => {
//     element.textContent = user.following;
//   });

//   document.querySelectorAll(".profile-posts").forEach((element) => {
//     element.textContent = userPosts.length.toString();
//   });
// }
