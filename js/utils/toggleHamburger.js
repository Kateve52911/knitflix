const btn = document.querySelector("#menu-btn");
const menus = document.querySelector("#mobile-menu");

btn.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});
