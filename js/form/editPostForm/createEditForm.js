import {
  createInputEditField,
  createInputField,
} from "../helpers/createInputField.js";
import {
  createTextAreaEditPost,
  createTextareaField,
} from "../helpers/createTextareaField.js";
import { createSubmitButton } from "../helpers/createSubmitButton.js";
import {
  handleEditPostSubmit,
  handleFormSubmit,
} from "../helpers/handleFormSubmit.js";
import { fetchSinglePost } from "../../api/posts/getSingePost.js";

export async function createEditForm(postId) {
  console.log(postId);
  const post = await fetchSinglePost(postId);
  console.log(post);
  const editPostContainer = document.createElement("div");
  editPostContainer.className =
    "items-center mb-6 bg-accent-sageGreen p-6 rounded-md shadow-md flex flex-col  ";

  const editContainerTitle = document.createElement("h2");
  editContainerTitle.innerHTML = "Edit your post:";
  editContainerTitle.className = "text-text-dark py-4";

  const form = document.createElement("form");
  form.className = "flex flex-col gap-4";
  form.id = "new-post-form";

  form.appendChild(createInputEditField(post.data.title, "text", "title"));
  form.appendChild(createInputEditField(post.data.media.url, "text", "imgSrc"));
  form.appendChild(createInputEditField(post.data.media.alt, "text", "imgAlt"));
  form.appendChild(createTextAreaEditPost(post.data.body, "body"));
  form.appendChild(createInputEditField("Tag", "text", "tag", false));

  form.appendChild(createSubmitButton("Save"));
  editPostContainer.appendChild(editContainerTitle);
  editPostContainer.appendChild(form);
  editPostContainer.addEventListener("submit", handleEditPostSubmit);
  return editPostContainer;
}
