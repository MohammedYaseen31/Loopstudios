const menuBtn = document.getElementById("menu-btn");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

const navToggle = () => {
  hamburger.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
};

menuBtn.addEventListener("click", navToggle);