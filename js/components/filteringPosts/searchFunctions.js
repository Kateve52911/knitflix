export function searchPostsByTerm(posts, searchTerm) {
  if (!searchTerm || !searchTerm.trim()) {
    return posts;
  }
  const term = searchTerm.toLowerCase();

  const results = posts.filter((post) => {
    const title = post.title?.toLowerCase() || "";
    const body = post.body?.toLowerCase() || "";
    const titleMatch = title.includes(term);
    const bodyMatch = body.includes(term);
    const searchMatch = titleMatch || bodyMatch;

    return searchMatch;
  });

  return results;
}

export function searchPostsByAuthor(posts, authorName) {
  if (!authorName || !authorName.trim()) {
    return posts;
  }

  const name = authorName.toLowerCase();
  return posts.filter((post) => {
    const author = post.author?.name?.toLowerCase() || ""; // Fixed this line
    return author.includes(name);
  });
}
