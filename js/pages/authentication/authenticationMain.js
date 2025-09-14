import "../../api/auth/registerUser.js";
import { registerUser } from "../../api/auth/registerUser.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  toggleHamburgerButton();
});

registerUser();
