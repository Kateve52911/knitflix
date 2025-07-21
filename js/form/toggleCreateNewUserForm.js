const newUser = document.getElementById("create-user-form").parentElement;
const newUserBtn = document.getElementById("new-user-btn");

newUserBtn.addEventListener("click", () => {
  newUser.classList.toggle("hidden");
  newUser.classList.toggle("flex");
});
