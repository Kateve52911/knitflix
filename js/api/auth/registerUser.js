import { API_URL_AUTH, API_URL_BASE, API_URL_REGISTER } from "../constants.js";

const registerForm = document.querySelector("#register-form");
console.log(registerForm);

export async function registerUser(userDetails) {
  console.debug(userDetails);
  try {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      "https://v2.api.noroff.dev/auth/register",
      fetchOptions
    );
    console.log(response);
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
