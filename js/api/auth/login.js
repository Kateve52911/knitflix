// import { API_URL_AUTH, API_URL_BASE, API_URL_LOGIN } from "../constants.js";
// import { saveKey } from "../../utils/storage/saveKey.js";

// export async function login(email, password) {
//   const response = await fetch(API_URL_BASE + API_URL_AUTH + API_URL_LOGIN, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//   });

//   if (response.ok) {
//     const { accessToken, ...profile } = (await response.json()).data;
//     saveKey("token", accessToken);
//     saveKey("profile", profile);
//     console.log("Login successful:", profile);

//     return profile;
//   }

//   throw new Error("Could not login to the account");
// }

import { saveKey } from "../../utils/storage/saveKey.js";

const loginForm = document.querySelector("#login-form");

console.log(loginForm);

async function loginUser(userDetails) {
  try {
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "https://v2.api.noroff.dev/auth/login",
      fetchOptions
    );
    const json = await response.json();

    const accessToken = json.data.accessToken;
    console.log(accessToken);
    saveKey("accessToken", accessToken);
    console.log(json);
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
