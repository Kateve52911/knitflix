import { renderSinglePost } from "../card/renderSinglePost.js";

export function renderFilteredPosts(postsToRender, containerElement) {
  if (!containerElement) {
    console.error("❌ Container element not found");
    return;
  }

  containerElement.innerHTML = "";

  if (!postsToRender || postsToRender.length === 0) {
    renderNoPostsMessage(containerElement);
    return;
  }

  postsToRender.forEach((post) => {
    try {
      const postElement = renderSinglePost(post);
      if (postElement) {
        containerElement.appendChild(postElement);
      }
    } catch (error) {
      console.error("Error rendering post:", post.id, error);
    }
  });
}

function renderNoPostsMessage(containerElement) {
  const noPostsMessage = document.createElement("div");
  noPostsMessage.className = "col-span-3 text-center py-8";
  noPostsMessage.innerHTML = `
    <p class="text-lg text-text-dark font-body">No posts matching your criteria.</p>
    <p class="text-base text-text-medium font-body">Try adjusting your filters or search term.</p>
  `;
  containerElement.appendChild(noPostsMessage);
}
