document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
            const isDarkMode = document.body.classList.contains("dark-theme");
            themeToggle.textContent = isDarkMode
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        });
    }
    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            if (!name || !email || !message) {
                formStatus.textContent = "Please complete all fields.";
                return;
            }
            formStatus.textContent =
                "Thank you, " + name + "! Your message is ready.";
            contactForm.reset();
        });
    }
    const currentYear = document.getElementById("year");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});