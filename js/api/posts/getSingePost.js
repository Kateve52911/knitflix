import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

export async function fetchSinglePost(postId) {
  try {
    if (!postId) {
      throw new Error("No post ID provided");
    }
    const accessToken = loadKey("accessToken");

    if (!accessToken) {
      throw new Error("No acces token found");
    }

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application(json",
      },
    };

    const URL = `${API_BASE_URL}${API_POSTS}/${postId}`;
    const response = await fetch(URL, fetchOptions);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
