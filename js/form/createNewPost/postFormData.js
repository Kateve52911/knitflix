export async function createPostFromFormData(formData) {
  const title = formData.get("title");
  const body = formData.get("body");
  const tag = formData.get("tag");
  const imgUrl = formData.get("imgScr");
  const imgAlt = formData.get("imgAlt");

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  if (!body || !body.trim()) {
    throw new Error("body is required");
  }

  if (!imgUrl || !imgUrl.trim()) {
    throw new Error("imgUrl is required");
  }

  if (!imgAlt || !imgAlt.trim()) {
    throw new Error("imgAlt is required");
  }

  if (!imgUrl.startsWith("http://") && !imgUrl.startsWith("https://")) {
    throw new Error("Image URL must start with http:// or https://");
  }

  const postData = {
    title: title,
    body: body,
    media: {
      url: imgUrl,
      alt: imgAlt,
    },
  };

  if (tag && tag.trim()) {
    createPostFromFormData.tags = [tag];
  }

  return postData;
}
