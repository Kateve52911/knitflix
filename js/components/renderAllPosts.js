import { renderSinglePost } from "./card/renderSinglePost.js";
import { fetchPosts } from "/js/api/posts/getPosts.js";

export async function renderAllPosts(containerId = "all-posts-container") {
  try {
    const postsData = await fetchPosts();

    const allPostsContainer = document.getElementById(containerId);
    if (!allPostsContainer) {
      console.error(`Container ${containerId} not found`);
      return;
    }

    allPostsContainer.innerHTML = "";

    if (postsData && postsData.length > 0) {
      postsData.forEach((post) => {
        const postContainer = renderSinglePost(post);
        allPostsContainer.appendChild(postContainer);
      });
    } else {
      allPostsContainer.innerHTML = "<p>No posts available</p>";
    }
  } catch (error) {
    console.error("Error in renderAllPosts:", error);
  }
}
