export function createInputField(placeholder, type, name, required = true) {
  const input = createInputElement(type, name, required);
  input.placeholder = placeholder;
  return input;
}

export function createInputElement(type, name, required = true) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.required = required;
  input.className = "border p-2 rounded-md";
  return input;
}

export function createInputEditField(placeholder, type, name, required = true) {
  const input = createInputElement(type, name, required);
  input.value = placeholder;
  return input;
}
