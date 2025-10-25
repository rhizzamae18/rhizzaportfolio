let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // Sticky Header
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove menu icon when clicking navbar links
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.classList.remove("bx-moon");
  themeToggle.classList.add("bx-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.classList.remove("bx-moon");
    themeToggle.classList.add("bx-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.classList.remove("bx-sun");
    themeToggle.classList.add("bx-moon");
    localStorage.setItem("theme", "light");
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close all other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// Close navbar when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navbar.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    navbar.classList.contains("active")
  ) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});
