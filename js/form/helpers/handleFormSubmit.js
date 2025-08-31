import { createPostFromFormData } from "../createNewPost/postFormData.js";
import { submitPostToAPI } from "../../api/posts/createPost.js";
import {
  setButtonErrorState,
  setButtonLoadingState,
  setButtonSuccessState,
} from "./buttonStateManager.js";
import { handlePostSuccess } from "./postSuccessHandler.js";
import { updatePost } from "../../api/posts/updatePost.js";

export async function handleCreatePostSubmit(event) {
  handleFormSubmit(event, submitPostToAPI);
}

export async function handleEditPostSubmit(event) {
  handleFormSubmit(event, updatePost);
}

export async function handleFormSubmit(event, func) {
  // event.preventDefault();

  // const form =
  //   event.target.tagName === "FORM"
  //     ? event.target
  //     : event.target.querySelector("form");
  // const formData = new FormData(form);
  // const submitButton = form.querySelector('button[type="submit"]');

  //setButtonLoadingState(submitButton, "Creating post...");

  event.preventDefault();
  const form =
    event.target.tagName === "FORM"
      ? event.target
      : event.target.querySelector("form");

  const formData = new FormData(form);

  // Debug: Log all form data
  console.log("Form data entries:");
  for (let [key, value] of formData.entries()) {
    console.log(key, ":", value);
  }

  const submitButton = form.querySelector('button[type="submit"]');

  try {
    const postData = createPostFromFormData(formData);
    const result = await func(postData);

    setButtonSuccessState(submitButton);
    form.reset();

    // setTimeout(() => {
    //   handlePostSuccess(form);
    // }, 2000);

    handlePostSuccess(form);

    return result;
  } catch (error) {
    console.error("Form submission failed:", error);
    setButtonErrorState(submitButton, error.message);
  }
}
