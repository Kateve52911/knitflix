//import { posts } from "../utils/source/posts.js";
// import { renderSinglePost } from "./card/renderSinglePost.js";
// import { fetchPosts } from "/js/api/posts/getPosts.js";

// const postsData = await fetchPosts();

// export function renderAllPosts(posts, containerId = "all-posts-container") {
//   const allPostsContainer = document.getElementById(containerId);

//   if (!allPostsContainer) {
//     console.error(`Container ${containerId} nor found`);
//   }

//   allPostsContainer.innerHTML = "";
//   posts.forEach((post) => {
//     const postContainer = renderSinglePost(post);

//     allPostsContainer.appendChild(postContainer);
//   });
// }

// renderAllPosts(postsData);

import { renderSinglePost } from "./card/renderSinglePost.js";
import { fetchPosts } from "/js/api/posts/getPosts.js";

export async function renderAllPosts(containerId = "all-posts-container") {
  const postsData = await fetchPosts();
  const allPostsContainer = document.getElementById(containerId);

  if (!allPostsContainer) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  allPostsContainer.innerHTML = "";
  postsData.forEach((post) => {
    const postContainer = renderSinglePost(post);
    allPostsContainer.appendChild(postContainer);
  });
}
