import { posts } from "../../utils/source/posts.js";
import { renderSinglePost } from "../renderSinglePost.js";

export function loadUserPosts(userId) {
  const userProjectsContainer = document.getElementById("user-projects");

  if (!userProjectsContainer) return;

  userProjectsContainer.innerHTML = "";

  const userPosts = posts.filter((post) => post.userId === userId);

  if (userPosts.length === 0) {
    showNoPostsMessage(userProjectsContainer);
    return;
  }

  displaySortedPosts(userPosts, userProjectsContainer);
}

function showNoPostsMessage(container) {
  container.innerHTML = `<div class="bg-brand-light p-4 rounded-lg col-span-full"><p class="text-text-dark text-center italic">No projects yet.</p></div>`;
}

function displaySortedPosts(posts, container) {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  sortedPosts.forEach((post) => {
    const postElement = renderSinglePost(post);
    container.appendChild(postElement);
  });
}
