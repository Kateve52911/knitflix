import { createPostForm } from "../createNewPost.js";
//import { posts } from "../../../utils/source/posts.js";
import { renderSinglePost } from "../../../components/renderSinglePost.js";

// export function handleFormSubmit(event) {
//   try {
//     //
//   } catch (error) {
//     console.log(error);
//   }
// }

export function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const allPostsContainer = document.getElementById("all-posts-container");
  const formData = new FormData(form);

  const fileInput = form.querySelector('input[name="imgSrc"]');
  const file = fileInput.files[0];
  const imgSrc = file ? URL.createObjectURL(file) : "";

  const newPost = {
    id: posts.length + 1,
    imgSrc: imgSrc,
    imgAlt: formData.get("imgAlt") || "",
    title: formData.get("title") || "",
    caption: formData.get("caption") || "",
    designer: formData.get("designer") || "",
    pattern: formData.get("pattern") || "",
    yarn: formData.get("yarn") || "",
    likes: 0,
    tag: formData.get("tag") || "",
    username: "CurrentUser",
    userId: 1,
    createdAt: new Date().toISOString(),
    comments: [],
  };

  posts.push(newPost);

  const postElement = renderSinglePost(newPost);
  allPostsContainer.insertBefore(postElement, allPostsContainer.firstChild);

  const img = postElement.querySelector("img");
  if (img && file) {
    img.onload = () => {
      URL.revokeObjectURL(imgSrc);
    };
  }

  form.reset();
  form.remove();

  const createButton = document.getElementById("create-new-post");
  if (createButton) {
    createButton.classList.remove("hidden");
  }
}

document
  .getElementById("create-new-post")
  .addEventListener("click", function () {
    const createButton = document.getElementById("create-new-post");

    if (!document.getElementById("new-post-form")) {
      const form = createPostForm();
      createButton.after(form);
      createButton.classList.add("hidden");
    }
  });
