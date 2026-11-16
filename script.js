
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // INTRO SCREEN
    // =========================

    const introScreen = document.getElementById("introScreen");
    const enterButton = document.getElementById("enterButton");

    if (introScreen && enterButton) {
        document.body.style.overflow = "hidden";

        enterButton.addEventListener("click", () => {
            introScreen.classList.add("hide");
            document.body.style.overflow = "";
        });
    }


    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    // =========================
    // SCROLL REVEAL ANIMATIONS
    // =========================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });

        }, {
            threshold: 0.15
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(element => {
            element.classList.add("active");
        });
    }


    // =========================
    // CONSOLE MESSAGE
    // =========================

    console.log("Welcome to L'atmosphere Cafe & Bubble Tea!");

});
