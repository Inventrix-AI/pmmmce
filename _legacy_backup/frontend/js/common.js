/**
 * Common Component Loader
 * Loads Header and Footer dynamically
 */

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/header.html", "header-placeholder", initHeader);
    loadComponent("components/footer.html", "footer-placeholder");
});

function loadComponent(url, elementId, callback) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            element.innerHTML = data;
            if (callback) callback();
        })
        .catch((err) => console.error(`Error loading component ${url}:`, err));
}

function initHeader() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navList = document.querySelector(".nav-list");

    if (menuBtn && navList) {
        menuBtn.addEventListener("click", () => {
            navList.classList.toggle("open");
        });
    }

    // Highlight Active Link based on URL
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Mobile/Tablet Dropdown Toggle
    const dropdowns = document.querySelectorAll(".dropdown > a");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", (e) => {
            if (window.innerWidth <= 992) { // Logic primarily for mobile/tablet
                e.preventDefault();
                const parent = dropdown.parentElement;
                parent.classList.toggle("active");

                // Close other open dropdowns
                document.querySelectorAll(".dropdown").forEach(item => {
                    if (item !== parent) {
                        item.classList.remove("active");
                    }
                });
            }
        });
    });
}
