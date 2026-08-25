const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด");
    form.reset();
  });
}
