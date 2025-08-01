import { fetchPosts } from "../../api/posts/getPosts.js";
import { elements } from "./domElements.js";
// import { posts } from "../../utils/source/posts.js";
import { filterAndSortPosts } from "./filterAndSortPosts.js";
import { renderFilteredPosts } from "./renderFilteredPosts.js";

const posts = await fetchPosts();

export function setupEventListeners() {
  const { tagFilter, sortSelect, searchInput, postsContainer } = elements;

  function updatePosts() {
    const selectedTag = tagFilter.value;
    const sortMethod = sortSelect.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    const postsToRender = filterAndSortPosts(
      posts,
      selectedTag,
      sortMethod,
      searchTerm
    );

    renderFilteredPosts(postsToRender, postsContainer);
  }

  tagFilter.addEventListener("change", updatePosts);
  sortSelect.addEventListener("change", updatePosts);

  let searchTimeout;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(updatePosts, 300);
  });
}
