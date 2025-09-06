import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

export async function fetchPosts() {
  try {
    const accessToken = loadKey("accessToken");
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
    };
    const response = await fetch(API_BASE_URL + API_POSTS, fetchOptions);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
