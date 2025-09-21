/**
 * Filters an array of posts by a selected tag
 *
 * @param {object[]} posts - an array of post objects to filter
 * @param {string} selectedTag - the tag to filter by. If null, undefined, or "all", returns all posts.
 * @returns {object[]} filtered array of posts that contain the selected tag.
 *
 * @example
 * ```js
 * const posts = [
 *      {title: "post 1", tags: ["coffee", "warm"]},
 *      {title: "post 2", tags: ["cosy", "autumn"]},
 *      {title: "post 3", tags: ["sweater", "tea"]}
 * ];
 *
 * const filteredPosts = filterPostsByTag(posts, "warm");
 * // Returns: [{title: "post 1", tags: ["coffee", "warm"]}]
 * ```
 */

export function filterPostsByTag(posts, selectedTag) {
  if (!selectedTag || selectedTag === "all") {
    return posts;
  }

  const results = posts.filter((post) => {
    if (!post.tags || !Array.isArray(post.tags)) {
      return false;
    }

    const hasTag = post.tags.includes(selectedTag);
    return hasTag;
  });

  return results;
}
