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

  for (let i = 0; i <= menuItems.length; i++) {
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

function appendTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback: "Loved the french roast. Perfectly balanced and rich.",
    },
    {
      name: "James Wilson",
      feedback: "Great espresso blend! Smooth & bold flavor. Real delicacy.",
    },
    {
      name: "Michael Brown",
      feedback: "Fantastic moch flavor. Fresh and aromatic . One of a kind.",
    },
    {
      name: "Emily Harris",
      feedback: "Excellent quality! Freshly roasted beans. Highly recommended.",
    },
    {
      name: "Anthony Thompson",
      feedback: "Best decaf I've ever tried! Smooth rich taste.",
    },
  ];
  const testimonialsList = document.querySelector(
    ".slider-container  .testimonials-list ",
  );

  for (let i = 0; i <= testimonials.length; i++) {
    let { name, feedback } = testimonials[i];
    testimonialsList.innerHTML += `
    <li class="testimonial">
    <img src="./assets/testimonialsImages/${name}.jpg" alt="${name}">
    <h3 class="name">${name} </h3>
    <i class="feedback">"${feedback}"</i>
    </li>`;
  }
}
appendTestimonials();
appendMenu();
