//import { posts } from "../utils/source/posts.js";
import { renderSinglePost } from "./renderSinglePost.js";
import { fetchPosts } from "/js/api/posts/getPosts.js";

const postsData = await fetchPosts();

export function renderAllPosts(posts, containerId = "all-posts-container") {
  const allPostsContainer = document.getElementById(containerId);

  if (!allPostsContainer) {
    console.error(`Container ${containerId} nor found`);
  }

  allPostsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postContainer = renderSinglePost(post);

    allPostsContainer.appendChild(postContainer);
  });
}

renderAllPosts(postsData);
