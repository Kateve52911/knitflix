import { loginUser } from "../../api/auth/login.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  toggleHamburgerButton();
});

loginUser();
