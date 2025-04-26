export function createFileInputField(label, name) {
  const input = document.createElement("input");
  input.type = "file";
  input.name = name;
  input.accept = "image/*";
  input.className = "border p-2 rounded-md";
  return input;
}
