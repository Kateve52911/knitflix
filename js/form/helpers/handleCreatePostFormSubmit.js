import { createPostFromFormData } from "../createNewPost/postFormData.js";
import { submitPostToAPI } from "../../api/posts/createPost.js";
import {
  setButtonErrorState,
  setButtonLoadingState,
  setButtonSuccessState,
} from "./buttonStateManager.js";
import { handlePostSuccess } from "./postSuccessHandler.js";
import { updatePost } from "../../api/posts/updatePost.js";

// export async function handleCreatePostSubmit(event) {
//   handleFormSubmit(event, submitPostToAPI);
// }

// export async function handleEditPostSubmit(event) {
//   handleFormSubmit(event, updatePost);
// }

export async function handleFormSubmit(event) {
  event.preventDefault();

  const form =
    event.target.tagName === "FORM"
      ? event.target
      : event.target.querySelector("form");
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit');

  setButtonLoadingState(submitButton, "Creating post...");

  try {
    const postData = createPostFromFormData(formData);
    const result = await submitPostToAPI(postData);

    setButtonSuccessState(submitButton);
    form.reset();

    setTimeout(() => {
      handlePostSuccess(form);
    }, 2000);

    return result;
  } catch (error) {
    console.error("Form submission failed:", error);
    setButtonErrorState(submitButton, error.message);
  }
}
