// Year update
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  root.classList.toggle("light");
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => nav.classList.toggle("open"));

// Contact form demo
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", e => {
  e.preventDefault();
  form.reset();
  formMsg.textContent = "Thanks! I’ll get back to you soon.";
  setTimeout(() => formMsg.textContent = "", 4000);
});
