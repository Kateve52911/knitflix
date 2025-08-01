import { API_BASE_URL, API_POSTS } from "../general/constants.js";

export async function submitPostToAPI(postData) {
  try {
    const response = await fetch(API_BASE_URL + API_POSTS, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("HTTP error status ${response.status}");
    }

    const json = await response.json();
    console.log("Posts created successfully", json);
    return json;
  } catch (error) {
    console.error("Error submitting posts to API", error);
    throw error;
  }
}
