import { loadKey } from "../../utils/storage/loadKey.js"; // Add this import
import { renderUserProfile } from "../../components/profilePage/profileRenderer.js";
import { toggleHamburgerButton } from "../../utils/toggleHamburger.js";
import { updateYear } from "../../utils/updateYear.js";

document.addEventListener("DOMContentLoaded", async () => {
  updateYear();
  toggleHamburgerButton();

  const currentUser = loadKey("currentUser");

  if (!currentUser) {
    window.location.href = "/login.html";
    return;
  }

  await renderUserProfile();
});
