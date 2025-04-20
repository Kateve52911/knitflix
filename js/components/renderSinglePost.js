import { posts } from "../utils/source/posts.js";

export function renderSinglePost(post) {
  const postContainer = document.createElement("div");
  postContainer.className =
    "flex flex-col bg-brand-light items-center py-6 px-4 my-2 mx-2 shadow-lg rounded-lg";

  const postTitle = document.createElement("h2");
  postTitle.innerHTML = post.title;
  postTitle.className =
    "text-text-dark font-serif text-center font-bold text-lg";

  const user = document.createElement("p");
  user.textContent = post.username;
  user.className = "text-text-dark font serif text-base";

  const postImg = document.createElement("img");
  postImg.src = post.imgSrc;
  postImg.alt = post.imgAlt;
  postImg.className = "max-w-52 items-center mt-2 shadow-xl";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex items-center space-x-4 mx-auto mt-2";

  const heartContainer = document.createElement("div");
  heartContainer.className = "relative inline-block";

  const heartIcon = document.createElement("i");
  heartIcon.className = "fa-solid fa-heart text-accent-heart text-5xl";

  const likes = document.createElement("span");
  likes.textContent = post.likes;
  likes.className =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold";

  heartContainer.appendChild(heartIcon);
  heartContainer.appendChild(likes);
  buttonContainer.appendChild(heartContainer);

  const commentContainer = document.createElement("div");
  commentContainer.className = "relative inline-block";

  const commentIcon = document.createElement("i");
  commentIcon.className = "fa-solid fa-comment text-accent-accentBtn text-5xl";

  const comments = document.createElement("span");
  comments.textContent = Array.isArray(post.comments)
    ? post.comments.length
    : 0;
  comments.className =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold";

  commentContainer.appendChild(commentIcon);
  commentContainer.appendChild(comments);
  buttonContainer.appendChild(commentContainer);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(user);
  postContainer.appendChild(postImg);
  postContainer.appendChild(buttonContainer);

  return postContainer;
}

renderSinglePost(posts);
