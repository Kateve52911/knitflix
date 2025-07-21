export function createTextareaField(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}
