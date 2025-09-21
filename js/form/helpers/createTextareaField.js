export function createTextareaField(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.required = true;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}

export function createTextAreaCreatingPost(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.required = true;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}

export function createTextAreaEditPost(value, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.value = value;
  textarea.required = true;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}
