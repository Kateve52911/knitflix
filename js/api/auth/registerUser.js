import { API_AUTH, API_REGISTER, API_BASE_URL } from "../general/constants.js";

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
      API_BASE_URL + API_AUTH + API_REGISTER,
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
