export function setupTagFilter(posts, tagFilter) {
  const uniqueTags = [...new Set(posts.map((post) => post.tag))];

  uniqueTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
    tagFilter.appendChild(option);
  });
}
