import { loadKey } from "../../utils/storage/loadKey.js";
import { API_KEY } from "../general/constants.js";
import { fetchSinglePost } from "./getSingePost.js";

export async function updatePost(
  postId,
  title,
  imageURL,
  imageAlt,
  body,
  tags
) {
  try {
    const post = fetchSinglePost(postId);

    const accessToken = loadKey("accessToken");

    const response = await fetch({
      method: "PUT",
      body: "",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
    });

    const json = await response.json();
  } catch (error) {
    console.error("Error submitting post to API:", error);
    throw error;
  }
}
