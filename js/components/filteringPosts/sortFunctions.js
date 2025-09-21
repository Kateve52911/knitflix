/**
 * Sorts posts by reaction count in descending order (most reactions first)
 * @param {object[]} posts - array of post objects to sort
 * @returns {object[]} new array of posts sorted by reaction count (highest to lowest)
 * @example
 * ```js
 * const posts = [
 *   {title: "Post 1", _count: {reactions: 5}},
 *   {title: "Post 2", _count: {reactions: 15}},
 *   {title: "Post 3", _count: {reactions: 2}}
 * ];
 *
 * const sortedPosts = sortPostsByReactions(posts);
 * // Returns: [
 * //   {title: "Post 2", _count: {reactions: 15}},
 * //   {title: "Post 1", _count: {reactions: 5}},
 * //   {title: "Post 3", _count: {reactions: 2}}
 * // ]
 * ```
 */

export function sortPostsByReactions(posts) {
  return [...posts].sort((a, b) => {
    const likesA = a._count?.reactions || 0;
    const likesB = b._count?.reactions || 0;
    return likesB - likesA;
  });
}

/**
 * Sorts posts by creation date
 * @param {object[]} posts - array of post objects to sort
 * @param {string} [direction="newest"] - sort direction: "newest" for newest first, "oldest" for oldest first
 * @returns {object[]} new array of posts sorted by creation date
 * @example
 * ```js
 * const posts = [
 *   {title: "Post 1", created: "2024-01-15"},
 *   {title: "Post 2", created: "2024-03-10"},
 *   {title: "Post 3", created: "2024-02-05"}
 * ];
 *
 * const newestFirst = sortPostsByDate(posts);
 * // Returns posts ordered: Post 2, Post 3, Post 1
 *
 * const oldestFirst = sortPostsByDate(posts, "oldest");
 * // Returns posts ordered: Post 1, Post 3, Post 2
 * ```
 */

export function sortPostsByDate(posts, direction = "newest") {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return direction === "oldest" ? dateA - dateB : dateB - dateA;
  });
}

export function sortPosts(posts, sortMethod) {
  switch (sortMethod) {
    case "reactions":
    case "likes":
      return sortPostsByReactions(posts);
    case "newest":
      return sortPostsByDate(posts, "newest");
    case "oldest":
      return sortPostsByDate(posts, "oldest");
    default:
      return sortPostsByDate(posts, "newest");
  }
}
