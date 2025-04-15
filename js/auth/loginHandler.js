import { users } from "../utils/source/users.js";
import { storeCurrentUser } from "./sessionManager.js";

export function initLoginForm() {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }
}

function handleLoginSubmit(event) {
  event.preventDefault(); // This prevents the form from actually submitting
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const user = authenticateUser(usernameInput, passwordInput);

  if (user) {
    storeCurrentUser(user);
    redirectToProfile(); // Your custom navigation
  } else {
    showLoginError();
  }
}

function authenticateUser(usernameOrEmail, password) {
  return users.find(
    (user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password
  );
}

function redirectToProfile() {
  window.location.href = "user/profile/index.html";
}

function showLoginError() {
  alert("Invalid username/email or password. Please try again");
}

document.addEventListener("DOMContentLoaded", initLoginForm);
