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

function appendMenu() {
  const menuItems = [
    {
      name: "Hot Bevrages",
      text: "Wide range of steaming hot coffee to make you awake and fresh.",
    },
    {
      name: "Cold Bevrages",
      text: "Creamy and smooth cold coffee that cools the soul.",
    },
    {
      name: "Refreshments",
      text: "Fresh and icy Drinks, that makes you cool.",
    },
    {
      name: "Special Combo",
      text: "Choose your favorite eating and drinking combination.",
    },
    {
      name: "Desserts",
      text: "Satiate your palate and take you on a culinary treat",
    },
    {
      name: "Burger & French Fries",
      text: "Delicious Juicy Burger, to satisfy your hunger",
    },
  ];
  const menuContainer = document.querySelector(
    ".menu-section .section-content ul",
  );

  for (let i = 0; i <= 6; i++) {
    let { name, text } = menuItems[i];
    menuContainer.innerHTML += `
      <li class='menu-item'>
          <img src='./assets/menuImages/${name}.png' alt='${name}'>
        <div class='menu-details'>
          <h3 class='name'>${name}</h3>
          <p class='text'>${text}</p>
        </div>
      </li>`;
  }
}
appendMenu();
