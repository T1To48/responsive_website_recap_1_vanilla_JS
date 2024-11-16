const mobileMenu = document.getElementsByClassName("navbar-list")[0];

function toggleMobileMenu() {
  const toggleMenuBtn = document.getElementById("menu-open-btn");
  toggleMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("show-mobile-menu");
  });
}

function closeMobileMenu() {
  const closeMenuBtn = document.querySelector("#menu-close-btn");
  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("show-mobile-menu");
  });
}

toggleMobileMenu();
closeMobileMenu();
