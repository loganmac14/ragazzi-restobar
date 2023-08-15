const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
hamburger.addEventListener('click', function () {
  if (main.classList.contains('hidden')) {
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
    setTimeout(function () {
      main.classList.remove('active');
      footer.classList.remove('active');
    }, 20);
  } else {
    main.classList.add('active');
    footer.classList.add('active');    
    main.addEventListener('transitionend', function(e) {
      main.classList.add('hidden');
      footer.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}, false);

document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("active");
  main.classList.remove("active");
  footer.classList.remove("active");
}))