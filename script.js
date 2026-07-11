document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
        hamburger.textContent = navbar.classList.contains("show") ? "✖" : "☰";
    });
});