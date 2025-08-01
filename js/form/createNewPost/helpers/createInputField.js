export function createInputField(placeholder, type, name, required = true) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.required = required;
  input.className = "border p-2 rounded-md";
  return input;
}
