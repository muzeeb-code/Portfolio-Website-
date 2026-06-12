// Mobile Hamburger Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking navigation links

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Scroll Animation

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});


function showSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}


// Run Animation

window.addEventListener("scroll", showSections);

window.addEventListener("load", showSections);


// Dynamic Footer Year

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Muzeeb. All Rights Reserved.`;