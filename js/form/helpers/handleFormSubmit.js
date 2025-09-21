import { createPostFromFormData } from "../createNewPost/postFormData.js";
import { submitPostToAPI } from "../../api/posts/createPost.js";
import {
  setButtonErrorState,
  setButtonSuccessState,
} from "./buttonStateManager.js";
import { handlePostSuccess } from "./postSuccessHandler.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { handleEditSuccess } from "./editPostSuccess.js";

export async function handleCreatePostSubmit(event) {
  handleFormSubmit(event, submitPostToAPI);
}

export async function handleEditPostSubmit(event) {
  handleFormSubmit(event, updatePost);
}

export async function handleFormSubmit(event, func) {
  event.preventDefault();
  const form =
    event.target.tagName === "FORM"
      ? event.target
      : event.target.querySelector("form");

  const formData = new FormData(form);

  const submitButton = form.querySelector('button[type="submit"]');

  try {
    const postData = createPostFromFormData(formData);
    const result = await func(postData);
    setButtonSuccessState(submitButton);

    if (func === updatePost) {
      await handleEditSuccess(form);
    } else {
      form.reset();
      handlePostSuccess(form);
    }

    return result;
  } catch (error) {
    console.error("Form submission failed:", error);
    setButtonErrorState(submitButton, error.message);
  }
}
