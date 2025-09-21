export function showLoadingMessage(container) {
  container.innerHTML =
    '<p class="text-center text-gray-600 font-body">Loading updated posts...</p>';
}

export function showErrorMessage(container) {
  container.innerHTML =
    '<p class="text-center text-red-600 font-body">Error loading posts. Please refresh the page.</p>';
}

export function showSuccessMessage() {
  const postContainer = document.getElementById("all-posts-container");

  if (!postContainer) return;

  const successMessage = createSuccessElement();
  addSuccessMessageToContainer(successMessage, postContainer);
  autoRemoveSuccessMessage(successMessage);
}

function createSuccessElement() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Post created successfully!";
  successMessage.className =
    "bg-green-100 text-green-800 p-4 rounded-md mb-4 text-center font-body";
  return successMessage;
}

function addSuccessMessageToContainer(message, container) {
  if (container.firstChild) {
    container.insertBefore(message, container.firstChild);
  } else {
    container.appendChild(message);
  }
}

function autoRemoveSuccessMessage(message) {
  setTimeout(() => {
    if (message && message.parentElement) {
      message.remove();
    }
  }, 1000);
}

export function showEditSuccessMessage() {
  const body = document.body;
  const successMessage = createEditSuccessElement();

  if (body.firstChild) {
    body.insertBefore(successMessage, body.firstChild);
  } else {
    body.appendChild(successMessage);
  }

  autoRemoveSuccessMessage(successMessage);
}

function createEditSuccessElement() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Post updated successfully!";
  successMessage.className =
    "bg-green-100 text-green-800 p-4 rounded-md mb-4 text-center font-body fixed top-4 left-1/2 transform -translate-x-1/2 z-50";
  return successMessage;
}
