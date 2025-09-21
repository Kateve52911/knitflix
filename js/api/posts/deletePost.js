import { selectedPost } from "../../pages/feed/feedMain.js";
import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

/**
 * Deletes the currently selected post
 * @returns {Promise<Response>} the fetch response object
 * @throws {Error} when deletions fails or network error
 * @example
 * ```js
 * try {
 *  const response = await deletePost()
 *  if (response.ok) {
 *      console.log("Post successfully deleted")
 *     };
 * } catch (error) {
 * console.error("Failed to delete post", error)}
 */

export async function deletePost() {
  try {
    const url = API_BASE_URL + API_POSTS + "/" + selectedPost;
    const accessToken = loadKey("accessToken");
    const fetchOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application(json",
      },
    };

    const response = await fetch(url, fetchOptions);
    return response;
  } catch (error) {
    console.error("Error deleting the post:", error);
    throw error;
  }
}
