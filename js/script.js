document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Fade-in scroll animation
  const elements = document.querySelectorAll(".fade-in");

  function checkPosition() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // View Projects button scroll
  const viewProjectsBtn = document.getElementById("viewProjectsBtn");
  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.getElementById("projects");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
