import { createPostForm } from "../createNewPost/createNewForm.js";

export function attachButtonClickHandler(button) {
  button.addEventListener("click", () => {
    const buttonContainer = button.parentElement;
    const formContainer = createPostForm();
    buttonContainer.replaceChild(formContainer, button);
    formContainer.scrollIntoView({ behavior: "smooth" });
  });
}

export function restoreCreatePostButton(formContainer) {
  const buttonContainer = formContainer.parentElement;

  const createNewPostButton = document.createElement("button");
  createNewPostButton.id = "create-new-post";
  createNewPostButton.className =
    "bg-accent-primaryBtn btn text-white font-body";
  createNewPostButton.textContent = "Create a new post";

  buttonContainer.replaceChild(createNewPostButton, formContainer);

  attachButtonClickHandler(createNewPostButton);

  return createNewPostButton;
}
