export function extractUniqueTagsFromPosts(posts) {
  const uniqueTags = new Set();

  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        if (tag && tag.trim()) {
          uniqueTags.add(tag.trim());
        }
      });
    }
  });

  const sortedTags = Array.from(uniqueTags).sort();
  return sortedTags;
}

export function createTagOption(tag) {
  const option = document.createElement("option");
  option.value = tag;
  option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
  return option;
}

export function populateTagFilter(posts, tagFilterElement) {
  if (!tagFilterElement) {
    console.error("❌ Tag filter element not found");
    return;
  }

  tagFilterElement.innerHTML = '<option value="all">All Tags</option>';

  const uniqueTags = extractUniqueTagsFromPosts(posts);

  uniqueTags.forEach((tag) => {
    const option = createTagOption(tag);
    tagFilterElement.appendChild(option);
  });

  console.log("✅ Tag filter populated with", uniqueTags.length, "tags");
}
