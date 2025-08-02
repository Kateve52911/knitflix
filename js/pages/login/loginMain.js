import "../../api/auth/loginUser.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  toggleHamburgerButton();
});
