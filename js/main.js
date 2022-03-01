const body = document.querySelector("body");
const navbarToggle = document.querySelector(".navbar-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

navbarToggle.toggled = false;

navbarToggle.addEventListener("click", () => {
  if (!navbarToggle.toggled) {
    navbarToggle.toggled = true;
    mobileMenu.style.display = "block";
  } else {
    navbarToggle.toggled = false;
    mobileMenu.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (body.offsetWidth >= 620) {
    navbarToggle.toggled = false;
    mobileMenu.style.display = "none";
  }
});
