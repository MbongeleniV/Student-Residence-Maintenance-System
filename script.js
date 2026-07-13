document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
        hamburger.textContent = navbar.classList.contains("show") ? "✖" : "☰";
    });
});

const elements = document.querySelectorAll('.serviceCard');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));