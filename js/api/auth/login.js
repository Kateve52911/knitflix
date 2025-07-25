import { API_URL_AUTH, API_URL_BASE, API_URL_LOGIN } from "../constants.js";
import { saveKey } from "../../utils/storage/saveKey.js";

export async function login(email, password) {
  const response = await fetch(API_URL_BASE + API_URL_AUTH + API_URL_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    saveKey("token", accessToken);
    saveKey("profile", profile);
    console.log("Login successful:", profile);

    return profile;
  }

  throw new Error("Could not login to the account");
}
