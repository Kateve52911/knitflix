export async function createPostFromFormData(formData) {
  const title = formData.get("title");
  const body = formData.get("body");
  const tag = formData.get("tag");
  const imgFile = formData.get("imgScr");
  const imgAlt = formData.get("imgAlt");
}
