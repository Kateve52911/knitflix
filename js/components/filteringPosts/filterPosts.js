// import { posts } from "../../utils/source/posts.js";
import { elements } from "./domElements.js";
import { setupTagFilter } from "./setupTagFilter.js";
import { setupEventListeners } from "./setupEventListeners.js";
import { fetchPosts } from "../../api/posts/getPosts.js";

const posts = await fetchPosts();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    setupTagFilter(posts, elements.tagFilter);
    setupEventListeners();
  }, 100);
});
