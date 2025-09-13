import { fetchPosts } from "../../api/posts/getPosts.js";
import { setupTagFilter } from "./setupTagFilter.js";
import { setupEventListeners } from "./setupEventListeners.js";
import { elements } from "./domElements.js";

async function setupFilterSystemWithPosts() {
  const posts = await fetchPosts();
  setupTagFilter(posts, elements.tagFilter);
  setupEventListeners(posts);
  return posts;
}

export async function initializeFilterSystem() {
  try {
    const posts = await setupFilterSystemWithPosts();
    return posts;
  } catch (error) {
    console.error("💥 Error initializing filter system:", error);
    return [];
  }
}

export async function refreshFilterSystem() {
  try {
    const posts = await setupFilterSystemWithPosts();
    return posts;
  } catch (error) {
    console.error("💥 Error refreshing filter system:", error);
    return [];
  }
}
