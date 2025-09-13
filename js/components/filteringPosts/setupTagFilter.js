import { populateTagFilter } from "./tagHelpers.js";

export function setupTagFilter(posts, tagFilter) {
  populateTagFilter(posts, tagFilter);
  console.log("✅ Tag filter setup complete");
}
