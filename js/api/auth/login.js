import { saveKey } from "../../utils/storage/saveKey.js";
import { API_AUTH, API_BASE_URL, API_LOGIN } from "../general/constants.js";

const loginForm = document.querySelector("#login-form");

/**
 * Logs in user with their credentials and saves authentication data
 * @param {object} userDetails - user login credentials
 * @param {string} userDetails.email - user's email address
 * @param {string} userDetails.password - user's password
 * @returns {Promise<void>} resolves when login is complete, rejects on error
 *
 * @example
 * ```js
 * const credentials = {
 *  email = "sol@stud.noroff.no",
 *  password = "sol12345"
 * };
 *
 * try {
 * await loginUser(credentials);
 * // User is now logged in, tokens saved to storage
 * } catch (error){
 * // handle login error
 * console.error("Login failed:", error)
 * };
 *```
 */
export async function loginUser(userDetails) {
  try {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      API_BASE_URL + API_AUTH + API_LOGIN,
      fetchOptions
    );

    const json = await response.json();

    if (response.ok && json.data) {
      const accessToken = json.data.accessToken;
      const userProfile = json.data;

      saveKey("accessToken", accessToken);
      saveKey("currentUser", userProfile);

      window.location.href = "/user/feed/index.html";
    } else {
      throw new Error(json.message || "Login failed");
    }
  } catch (error) {
    console.log(error);
  }
}

function onLoginFormSubmit(event) {
  event.preventDefault();
  const fromData = new FormData(event.target);
  const fromField = Object.fromEntries(fromData);
  loginUser(fromField);
}

loginForm.addEventListener("submit", onLoginFormSubmit);
