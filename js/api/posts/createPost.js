import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_POSTS, API_KEY } from "../general/constants.js";

export async function submitPostToAPI(postData) {
  console.log(typeof postData);
  try {
    const accessToken = loadKey("accessToken");

    const response = await fetch(API_BASE_URL + API_POSTS, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error status ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error submitting post to API:", error);
    throw error;
  }
}
