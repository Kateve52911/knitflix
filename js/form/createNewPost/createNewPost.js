import { createInputField } from "./helpers/createInputField.js";
import { createTextareaField } from "./helpers/createTextareaField.js";
import { createSubmitButton } from "./helpers/createSubmitButton.js";
import { createFileInputField } from "./helpers/createFileInputField.js";
import { handleFormSubmit } from "./helpers/handleFormSubmit.js";

export function createPostForm() {
  const newPostFormContainer = document.createElement("div");
  newPostFormContainer.className = "flex flex-col items-center mb-6";

  const form = document.createElement("form");
  form.className =
    "bg-brand-light p-6 rounded-md shadow-md flex flex-col gap-4 ";
  form.id = "new-post-form";
  form.enctype = "multipart/form-data";

  form.appendChild(createFileInputField("Upload Image", "imgSrc"));
  form.appendChild(createInputField("Image alt text", "text", "imgAlt"));
  form.appendChild(createInputField("Post title", "text", "title"));
  form.appendChild(createTextareaField("Caption", "caption"));
  form.appendChild(createInputField("Designer", "text", "designer"));
  form.appendChild(createInputField("Pattern", "text", "pattern"));
  form.appendChild(createInputField("Yarn", "text", "yarn"));
  form.appendChild(
    createInputField("Tag (e.g., 'wip', 'finished')", "text", "tag")
  );
  form.appendChild(createSubmitButton("Publish Post"));

  newPostFormContainer.appendChild(form);

  newPostFormContainer.addEventListener("submit", handleFormSubmit);

  return newPostFormContainer;
}
