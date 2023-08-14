const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const header = document.querySelector("header");
const main = document.querySelector("main");
hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  main.classList.toggle("active");
})
document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))