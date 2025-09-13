import { filterPostsByTag } from "./filterFunctions.js";
import { searchPostsByTerm } from "./searchFunctions.js";
import { sortPosts } from "./sortFunctions.js";

export function filterAndSortPosts(posts, selectedTag, sortMethod, searchTerm) {
  let processedPosts = [...posts];
  processedPosts = filterPostsByTag(processedPosts, selectedTag);

  if (searchTerm) {
    const searchResult = searchPostsByTerm(processedPosts, searchTerm);
    if (searchResult && Array.isArray(searchResult)) {
      processedPosts = searchResult;
    } else {
      console.error(
        "❌ Search function returned invalid result:",
        searchResult
      );
      processedPosts = [];
    }
  }

  processedPosts = sortPosts(processedPosts, sortMethod);

  return processedPosts;
}
