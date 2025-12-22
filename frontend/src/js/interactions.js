/**
 * Global Interactions
 * Handles Dropdowns, Mobile Menu, and other UI events
 */

export function initInteractions() {
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

    // 2. Button Link Handling (Temporary for missing pages)
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
