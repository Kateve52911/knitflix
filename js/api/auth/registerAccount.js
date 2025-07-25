import {
  API_URL_BASE,
  API_URL_AUTH,
  API_URL_REGISTER,
  API_URL_LOGIN,
} from "../constants.js";

export async function registerUser(name, email, password) {
  const response = await fetch(API_URL_BASE + API_URL_AUTH + API_URL_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Could not register the account");
}
