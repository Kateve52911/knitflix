export function createSubmitButton(text) {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = text;
  button.className = "bg-accent-primaryBtn btn text-white font-body";
  return button;
}
