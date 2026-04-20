const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

document.getElementById("nav-toggle").addEventListener("click", function () {
    // Hamgurber menu toggle open/close
    navMenu.classList.toggle("active");
    // Toggle the button text between "≡" and "✕"
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active") ? "✕" : "≡";
});