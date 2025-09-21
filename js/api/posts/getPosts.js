import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

/**
 * Fetches the first 100 posts of the API with author included
 * @returns {Promise<object[]>} an array of post objects containing up to the first 100 posts
 * (paginated) with keys and values as specified in the API or an empty array
 * @example
 * ```js
 * try {
 *  const posts = await fetchPosts();
 *  posts.forEach(post => {
 *    console.log(post.title, post.author, post.image);
 * });
 * } catch (error) {
 * console.error("Could not fetch posts:", error)};
 *```
 */

export async function fetchPosts() {
  try {
    const accessToken = loadKey("accessToken");
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
    };

    const response = await fetch(
      API_BASE_URL + API_POSTS + "/?_author=true",
      fetchOptions
    );

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
