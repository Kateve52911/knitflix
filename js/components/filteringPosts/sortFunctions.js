/**
 * sorts posts by their reactions/comments
 *
 * @param {object[]} posts
 * @returns
 */

export function sortPostsByReactions(posts) {
  console.log("🔄 Sorting by reactions");

  return [...posts].sort((a, b) => {
    const likesA = a._count?.reactions || 0;
    const likesB = b._count?.reactions || 0;
    return likesB - likesA;
  });
}

export function sortPostsByDate(posts, direction = "newest") {
  console.log("🔄 Sorting by date:", direction);

  return [...posts].sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return direction === "oldest" ? dateA - dateB : dateB - dateA;
  });
}

export function sortPosts(posts, sortMethod) {
  console.log("🔄 Sorting", posts.length, "posts by:", sortMethod);

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
