export function filterAndSortPosts(posts, selectedTag, sortMethod, searchTerm) {
  let filteredPosts = [...posts];

  if (selectedTag !== "all") {
    filteredPosts = filteredPosts.filter((post) => post.tag === selectedTag);
  }

  if (searchTerm) {
    filteredPosts = filteredPosts.filter((post) => {
      return (
        (post.title && post.title.toLowerCase().includes(searchTerm)) ||
        (post.caption && post.caption.toLowerCase().includes(searchTerm)) ||
        (post.designer && post.designer.toLowerCase().includes(searchTerm)) ||
        (post.pattern && post.pattern.toLowerCase().includes(searchTerm)) ||
        (post.yarn && post.yarn.toLowerCase().includes(searchTerm)) ||
        (post.username && post.username.toLowerCase().includes(searchTerm))
      );
    });
  }

  if (sortMethod === "likes") {
    filteredPosts.sort((a, b) => {
      const likesA =
        typeof a.likes === "string" ? parseInt(a.likes, 10) : a.likes;
      const likesB =
        typeof b.likes === "string" ? parseInt(b.likes, 10) : b.likes;
      return likesB - likesA;
    });
  } else {
    filteredPosts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }
  return filteredPosts;
}
