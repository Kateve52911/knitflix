/**
 * Searches posts by a search term in body, title and author name
 * @param {object[]} posts - an array of post objects to search through
 * @param {string} searchTerm - the term to search for. If empty or whitespace only, returns all posts.
 * @returns {object[]} filtered array of posts that match the search term in title, body or author
 *
 * @example
 * ```js
 * const posts = [
 *      {title: "Fresh coffee!", body: "I love fresh coffee in the morning!", author: {name: "Emily"}},
 *      {title: "First fish", body: "Finally got myself a Clownfish! Yay!", author: {name: "Jonathan"}},
 *      {title: "Summer holidays", body: "So looking forward to some R&R :)", author: {name: "Phillip"}}
 * ];
 *
 * const results = searchPostByTerm(posts, "jonathan");
 * // Returns: posts by "Jonathan" and containing "jonathan" in body/title
 * ```
 *
 */

export function searchPostsByTerm(posts, searchTerm) {
  if (!searchTerm || !searchTerm.trim()) {
    return posts;
  }
  const term = searchTerm.toLowerCase();

  const results = posts.filter((post) => {
    const title = post.title?.toLowerCase() || "";
    const body = post.body?.toLowerCase() || "";
    const author = post.author?.name?.toLowerCase() || "";
    const titleMatch = title.includes(term);
    const bodyMatch = body.includes(term);
    const authorMatch = author.includes(term);
    const searchMatch = titleMatch || bodyMatch || authorMatch;

    return searchMatch;
  });
  return results;
}
