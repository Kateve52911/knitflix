import { loginUser } from "../../api/auth/login.js";
import { fetchUsers } from "../../api/users/getUsers.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  toggleHamburgerButton();
});

loginUser();
fetchUsers();
