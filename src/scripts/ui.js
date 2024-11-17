// const mobileMenu = document.getElementsByClassName("navbar-list")[0];
const bodyElement = document.querySelector("body");

function toggleMobileMenu() {
  const toggleMenuBtn = document.getElementById("menu-open-btn");
  toggleMenuBtn.addEventListener("click", function () {
    bodyElement.classList.toggle("show-mobile-menu");
  });
}

function closeMobileMenu() {
  const closeMenuBtn = document.querySelector("#menu-close-btn");
  closeMenuBtn.addEventListener("click", function () {
    bodyElement.classList.remove("show-mobile-menu");
  });
}

toggleMobileMenu();
closeMobileMenu();
