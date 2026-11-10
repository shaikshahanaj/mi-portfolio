// Mobile Menu
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});

// Close menu after clicking a link
let links = document.querySelectorAll(".menu a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
    });
});

// Current Year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact Form
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name +
        "! Your message has been received.");

    contactForm.reset();

});