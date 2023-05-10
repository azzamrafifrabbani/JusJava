const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#ham").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#ham");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// navbar sticky
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});
