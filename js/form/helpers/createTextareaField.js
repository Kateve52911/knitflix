// export function createTextareaField(name) {
//   const textarea = document.createElement("textarea");
//   textarea.name = name;
//   textarea.required = true;
//   textarea.className = "border p-2 rounded-md h-32 resize-none";
//   return textarea;
// }

export function createTextareaField(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.required = true;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}

// export function createTextAreaCreatingPost(placeholder, name) {
//   const textarea = createTextareaField(name);
//   textarea.placeholder = placeholder;
//   return textarea;
// }

export function createTextAreaCreatingPost(placeholder, name) {
  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.required = true;
  textarea.className = "border p-2 rounded-md h-32 resize-none";
  return textarea;
}

export function createTextAreaEditPost(placeholder, name) {
  const textarea = createTextareaField(name);
  textarea.value = placeholder;
  return textarea;
}
