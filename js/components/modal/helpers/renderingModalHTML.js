import { closeModal } from "./closeModal.js";

export function renderViewModal(postData) {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "text-text-light font-body text-center font-bold text-lg";
  title.innerHTML = postData.data.title;

  // const author = document.createElement("h3");
  // author.innerHTML = postData._author;
  // author.className = "text-text-light font-body text-center font text-s";
  // console.log(author);

  const dateCreated = document.createElement("p");
  dateCreated.innerHTML = postData.data.created;
  dateCreated.className =
    "text-text-light font-body text-center font text-xs mt-2";

  const img = document.createElement("img");
  img.src = postData.data.media
    ? postData.data.media.url
    : "/images/posts/post_1.jpg";
  img.alt = postData.data.media ? postData.data.media.alt : "No text";
  img.className = "max-w-xs mt-2 shadow-xl";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex m-4 absolute top-2 left-2 gap-4";

  const editButton = document.createElement("button");
  editButton.className = "fa-solid fa-pen text-accent-sageGreen text-2xl";
  editButton.id = "edit-post-button";

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "fa-solid fa-trash-can text-accent-dustyBlue text-2xl";
  deleteButton.id = "delete-post-button";

  const body = document.createElement("p");
  body.innerHTML = postData.data.body;
  body.className = "mt-2 text-text-light  font-body text-m";

  const closeButton = document.createElement("button");
  closeButton.className =
    "fa-solid fa-xmark m-4 text-2xl text-brand-light absolute top-2 right-2 hover:text-brand-dark ";
  closeButton.onclick = closeModal;

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  //modalContent.appendChild(author);
  modalContent.appendChild(dateCreated);
  modalContent.appendChild(img);
  modalContent.appendChild(buttonContainer);
  modalContent.appendChild(body);
}
