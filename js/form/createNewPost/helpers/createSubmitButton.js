export function createSubmitButton(text) {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = text;
  button.className =
    "bg-accent-primaryBtn py-2 px-4 rounded-md text-white font-body";
  return button;
}
