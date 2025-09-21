import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_USERS } from "../general/constants.js";

export async function fetchUserProfile(username) {
  try {
    const accessToken = loadKey("accessToken");
    if (!accessToken) {
      throw new Error("No access token found. Please log in first.");
    }

    const queryParam = "_following=true&_followers=true&_posts=true";
    const URL = `${API_BASE_URL}${API_USERS}/${username}?${queryParam}`;

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(URL, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    return json.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}
