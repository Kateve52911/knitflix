export function createCancelButton(text) {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = text;
  button.className = "bg-accent-secondaryBtn btn text-white font-body";
  return button;
}
