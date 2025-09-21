import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

/**
 * Fetches a single post by ID with title, author, date published, image, body and comments data
 * @param {string} postId - the ID of the post being fetched
 * @returns {Promise<object>} post object with title, author, date published, image, body text and
 * number of comments included
 * @throws {Error} when postId is not included or access token is missing
 * @example
 * ```js
 * try {
 *  const postData = await fetchSinglePost("1254");
 *  console.log(postData.title, postData.date, postData.author, postData.image, postData.body,
 *  postData.comments);
 * } catch (error) {
 * console.error("Failed to fetch post", error.message)
 * };
 *```
 */
export async function fetchSinglePost(postId) {
  try {
    if (!postId) {
      throw new Error("No post ID provided");
    }
    const accessToken = loadKey("accessToken");

    if (!accessToken) {
      throw new Error("No access token found");
    }

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application(json",
      },
    };

    const URL = `${API_BASE_URL}${API_POSTS}/${postId}?_author=true&_comments=true`;
    const response = await fetch(URL, fetchOptions);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
