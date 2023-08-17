const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
hamburger.addEventListener('click', function () {
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  main.classList.toggle("active");
  footer.classList.toggle("active");

  if (main.classList.contains("active") || footer.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("active");
  main.classList.remove("active");
  footer.classList.remove("active");
}))

