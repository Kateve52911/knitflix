import { loginUser } from "../../api/auth/login.js";
import { fetchUserProfile } from "../../api/users/getUserProfile.js";
import { fetchUsers } from "../../api/users/getUsers.js";
import { renderUserProfile } from "../../components/profilePage/profileRenderer.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  toggleHamburgerButton();
});

loginUser();
fetchUsers();
