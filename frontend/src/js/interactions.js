/**
 * Global Interactions
 * Handles Dropdowns, Mobile Menu, and other UI events
 */

export function initInteractions() {
    // 0. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuBtn.textContent = navList.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 1. Dropdown Logic (Desktop Hover + Mobile Click)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');

        // Desktop Hover
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 992) {
                menu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 992) {
                menu.style.display = 'none';
            }
        });

        // Mobile Click
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const isVisible = menu.style.display === 'block';
                // Close others
                document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');

                // Toggle current
                menu.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    // 2. Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    if (counters.length > 0) {
        const observerOptions = {
            threshold: 0.5 // Trigger when 50% visible
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');

                    const updateCount = () => {
                        const count = +counter.innerText;
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20); // 20ms frame
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                    observer.unobserve(counter); // Only run once
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            statsObserver.observe(counter);
        });
    }

    // 3. Button Link Handling (Temporary for missing pages)
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('http') && !href.startsWith('/') && !href.endsWith('.html')) {
                // It's a placeholder link
                e.preventDefault();
                alert('This page is under construction.');
            }
            // If it links to an HTML file that doesn't exist (returns 404), fetch might fail, but browser will just show 404.
            // We can intercept nav links if we want a SPA feel, but currently we are Multi-Page app styled.
        }
    });
}
