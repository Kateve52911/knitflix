// const form = document.getElementById("login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const password = document.getElementById("password").value;
//   const passwordField = document.getElementById("password");

//   const existingError = document.getElementById("password-error");
//   if (existingError) {
//     existingError.remove();
//   }

//   if (password.length < 8) {
//     const errorMessage = document.createElement("div");
//     errorMessage.id = "password-error";
//     errorMessage.className = "text-red-700 text-sm mt-1";
//     errorMessage.textContent = "Password must be at least 8 characters long";

//     passwordField.parentNode.insertBefore(
//       errorMessage,
//       passwordField.nextSibling
//     );
//   } else {
//     form.submit();
//   }
// });
