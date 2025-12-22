document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle is handled in common.js (initHeader) after component injection

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }
});

// Tabbed Interface Logic
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Accessibility Tools Logic
let currentFontSize = 100;

function adjustFontSize(change) {
    currentFontSize += change * 10;
    if (currentFontSize < 80) currentFontSize = 80;
    if (currentFontSize > 150) currentFontSize = 150;
    document.body.style.fontSize = currentFontSize + "%";
}

function resetFontSize() {
    currentFontSize = 100;
    document.body.style.fontSize = "100%";
}

function toggleTheme() {
    document.body.classList.toggle("contrast-theme");
    // You would add specific CSS for .contrast-theme in style.css
}

