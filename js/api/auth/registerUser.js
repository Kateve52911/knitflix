import { API_AUTH, API_REGISTER, API_BASE_URL } from "../general/constants.js";

const registerForm = document.querySelector("#register-form");

/**
 * Registers a new user account
 * @param {object} userDetails - user registration details
 * @param {string} userDetails.email - user's email address
 * @param {string} userDetails.password - user's password
 * @param {string} userDetails.name - user's name
 * @returns {Promise<object>} registration response data from the server
 * @example
 * ```js
 * const newUser = {
 *  email: "newUser123@stud.noroff.no",
 *  password = "newUser123",
 *  name: "John Doe"
 * };
 *
 * try {
 *  const result = await registerUser(newUser);
 *  console.log("Registration successful!", result);
 * } catch (error) {
 * console.error("Registration failed", error)
 * }
 * ```
 */

export async function registerUser(userDetails) {
  try {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      API_BASE_URL + API_AUTH + API_REGISTER,
      fetchOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function onRegistrationFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formField = Object.fromEntries(formData);
  registerUser(formField);
}

registerForm.addEventListener("submit", onRegistrationFormSubmit);
