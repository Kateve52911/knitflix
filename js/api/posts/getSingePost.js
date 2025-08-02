import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_POSTS } from "../general/constants.js";

export async function fetchSinglePost() {
  try {
    // const URLParams = new URLSearchParams(window.location.search);
    // const postId = URLParams.get("id");

    if (!postId) {
      throw new Error("No post ID provided");
    }

    const accessToken = loadKey("accessToken");
    if (!accessToken) {
      throw new Error("No acces token found");
    }
    console.log(accessToken);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application(json",
      },
    };
    console.log("Fetch options:", fetchOptions);

    const URL = `${API_BASE_URL}${API_POSTS}/${postId}`;

    console.log("URL:", URL);

    const response = await fetch(URL, fetchOptions);
    console.log("response:", response);
    const json = await response.json();
    console.log("json", json);

    return json;
  } catch (error) {
    console.log(error);
  }
}
