import { posts } from "../../utils/source/posts.js";
import { elements } from "./domElements.js";
import { setupTagFilter } from "./setupTagFilter.js";
import { setupEventListeners } from "./setupEventListeners.js";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    setupTagFilter(posts, elements.tagFilter);
    setupEventListeners();
  }, 100);
});
