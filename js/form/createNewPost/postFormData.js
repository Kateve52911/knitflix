export function createPostFromFormData(formData) {
  const title = formData.get("title");
  const body = formData.get("body");
  const tag = formData.get("tag");
  const imgSrc = formData.get("imgSrc");
  const imgAlt = formData.get("imgAlt");

  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  if (!body || !body.trim()) {
    throw new Error("Body is required");
  }

  if (!imgSrc || !imgSrc.trim()) {
    throw new Error("Image URL is required");
  }

  if (!imgAlt || !imgAlt.trim()) {
    throw new Error("Image alt text is required");
  }

  if (!imgSrc.startsWith("http://") && !imgSrc.startsWith("https://")) {
    throw new Error("Image URL must start with http:// or https://");
  }

  const postData = {
    title: title,
    body: body,
    media: {
      url: imgSrc,
      alt: imgAlt,
    },
  };

  if (tag && tag.trim()) {
    postData.tags = [tag];
  }

  return postData;
}
