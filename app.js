// setting up date manually.
const date = document.querySelector(".date");
const newDate = new Date();
date.innerHTML = newDate.getFullYear();

// navbar Expand Funtionlity and getting navbar links dynamically.
const toggle = document.querySelector(".toggle");
const header = document.querySelector("#home");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggle.addEventListener("click", function (e) {
  const linkHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight == 0) {
    linksContainer.style.height = `${linkHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function (e) {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();

    // navigate to specific section
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-navbar");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
      // behavior: "smooth", // or we can also enable smooth scrolling in CSS
    });
  });
});
