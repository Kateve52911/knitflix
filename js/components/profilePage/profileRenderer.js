import { loadKey } from "../../utils/storage/loadKey.js";
import { fetchUserProfile } from "../../api/users/getUserProfile.js"; // Add this import

export async function renderUserProfile() {
  const currentUser = loadKey("currentUser");

  if (!currentUser) {
    console.error("No user found in storage");
    return;
  }

  if (!currentUser.name) {
    console.error("No name found in currentUser object");
    return;
  }

  const userProfileWithStats = await fetchUserProfile(currentUser.name);

  if (!userProfileWithStats) {
    console.error("Failed to fetch user profile with stats");
    return;
  }

  setPageTitle(userProfileWithStats.name);
  populateProfileInfo(userProfileWithStats);
  setProfileImage(userProfileWithStats);
  updateUserStats(userProfileWithStats);
}

function setPageTitle(name) {
  document.title = `${name} | Knitflix`;
}

function populateProfileInfo(user) {
  document.querySelectorAll(".profile-username").forEach((element) => {
    element.textContent = user.name;
  });

  document.querySelectorAll(".profile-name").forEach((element) => {
    element.textContent = user.name;
  });

  document.querySelectorAll(".profile-description").forEach((element) => {
    element.textContent = user.bio || "No bio available";
  });
}

function setProfileImage(user) {
  document.querySelectorAll(".profile-avatar").forEach((element) => {
    if (user.avatar && user.avatar.url) {
      element.src = user.avatar.url;
      element.alt = user.avatar.alt || `${user.name}'s profile picture`;
    } else {
      element.src = "/images/default-avatar.jpg"; // Adjust path as needed
      element.alt = `${user.name}'s profile picture`;
    }
  });
}

// function updateUserStats(user) {
//   document.querySelectorAll(".profile-followers").forEach((element) => {
//     element.textContent = user._count?.followers || user.followers || "0";
//   });

//   document.querySelectorAll(".profile-following").forEach((element) => {
//     element.textContent = user._count?.following || user.following || "0";
//   });

//   document.querySelectorAll(".profile-posts").forEach((element) => {
//     element.textContent = user._count?.posts || user.posts?.length || "0";
//   });
// }

function updateUserStats(user) {
  document.querySelectorAll(".profile-followers").forEach((element) => {
    const followerCount =
      user._count?.followers ?? user.followers?.length ?? "0";
    element.textContent = followerCount;
  });

  document.querySelectorAll(".profile-following").forEach((element) => {
    const followingCount =
      user._count?.following ?? user.following?.length ?? "0";
    element.textContent = followingCount;
  });

  document.querySelectorAll(".profile-posts").forEach((element) => {
    const postCount = user._count?.posts ?? user.posts?.length ?? "0";
    element.textContent = postCount;
  });
}
