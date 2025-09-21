import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_USERS } from "../general/constants.js";

export async function fetchUsers() {
  try {
    const accessToken = loadKey("accessToken");

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(API_BASE_URL + API_USERS, fetchOptions);

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}
