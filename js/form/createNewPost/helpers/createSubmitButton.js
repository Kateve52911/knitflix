export function createSubmitButton(text) {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = text;
  button.className =
    "bg-accent-primaryBtn py-2 px-4 rounded-md tet-white font-serif";
  return button;
}
