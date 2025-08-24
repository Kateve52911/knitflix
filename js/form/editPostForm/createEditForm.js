import { createInputField } from "../helpers/createInputField.js";
import { createTextareaField } from "../helpers/createTextareaField.js";
import { createSubmitButton } from "../helpers/createSubmitButton.js";
import { handleFormSubmit } from "../helpers/handleFormSubmit.js";
import { fetchSinglePost } from "../../api/posts/getSingePost.js";

export async function createEditForm(postId) {
  console.log(postId);
  const post = await fetchSinglePost(postId);
  console.log(post);
  const newPostFormContainer = document.createElement("div");
  newPostFormContainer.className = "flex flex-col items-center mb-6";

  const form = document.createElement("form");
  form.className =
    "bg-brand-light p-6 rounded-md shadow-md flex flex-col gap-4 ";
  form.id = "new-post-form";

  form.appendChild(createInputField(post.data.title, "text", "title"));
  form.appendChild(createInputField(post.data.media.url, "text", "imgSrc"));
  form.appendChild(createInputField(post.data.media.alt, "text", "imgAlt"));
  form.appendChild(createTextareaField(post.data.body, "body"));
  form.appendChild(
    createInputField("Tag (e.g., 'wip', 'finished')", "text", "tag", false)
  );

  form.appendChild(createSubmitButton("Save"));
  newPostFormContainer.appendChild(form);
  newPostFormContainer.addEventListener("submit", handleFormSubmit);
  return newPostFormContainer;
}
