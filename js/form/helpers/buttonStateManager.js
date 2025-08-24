export function setButtonLoadingState(button, text) {
  button.originalText = button.textContent;
  button.textContent = text;
  button.disabled = true;
}

export function setButtonSuccessState(button) {
  button.textContent = "Success!";
}

export function setButtonErrorState(button, errorMessage) {
  button.textContent = "Error - Try Again!";
  button.disabled = false;

  setTimeout(() => {
    button.textContent = button.originalText;
  }, 3000);

  alert(`Failed to create post: ${errorMessage}`);
}
