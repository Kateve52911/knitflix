import { elements } from "./domElements.js";
import { filterAndSortPosts } from "./filterAndSortPosts.js";
import { renderFilteredPosts } from "./renderFilteredPosts.js";

export function setupEventListeners(posts) {
  const { tagFilter, sortSelect, searchInput, postsContainer } = elements;

  if (!tagFilter || !sortSelect || !searchInput || !postsContainer) {
    console.error("Filter elements not found in the DOM:", {
      tagFilter: !!tagFilter,
      sortSelect: !!sortSelect,
      searchInput: !!searchInput,
      postsContainer: !!postsContainer,
    });
    return;
  }

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
