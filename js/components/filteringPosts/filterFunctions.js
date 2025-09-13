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
