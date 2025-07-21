import { renderSinglePost } from "../renderSinglePost.js";

export function renderFilteredPosts(postsToRender, containerElement) {
  containerElement.innerHTML = "";

  if (postsToRender.length === 0) {
    const noPostsMessage = document.createElement("div");
    noPostsMessage.className = "col-span-3 text-center py-8";
    noPostsMessage.innerHTML = `
    <p class="text-lg text-text-dark font-body"> No posts matching you criteria.</p>
    <p class="text-base text-text-medium font-body">Try adjusting your filters or search term.</p>`;

    containerElement.appendChild(noPostsMessage);
    return;
  }

  postsToRender.forEach((post) => {
    const postElement = renderSinglePost(post);
    containerElement.appendChild(postElement);
  });
}
