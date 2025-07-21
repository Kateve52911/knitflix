import { posts } from "../utils/source/posts.js";
import { renderSinglePost } from "./renderSinglePost.js";

function renderAllPosts(posts) {
  const allPostsContainer = document.getElementById("all-posts-container");
  posts.forEach((post) => {
    const postContainer = renderSinglePost(post);

    allPostsContainer.appendChild(postContainer);
  });
}

renderAllPosts(posts);
