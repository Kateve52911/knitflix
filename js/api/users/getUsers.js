import { loadKey } from "../../utils/storage/loadKey.js";
import { API_BASE_URL, API_KEY, API_USERS } from "../general/constants.js";

export async function getUsers() {
  try {
    const accessToken = loadKey("accessToken");

    console.log(accessToken);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
      },
    };

    console.log(fetchOptions);

    const response = await fetch(API_BASE_URL + API_USERS, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

getUsers();
