/**
 * PROPVIA LTD AG - Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    console.log('PROPVIA Systems Initialized.');
});

/**
 * Handle Header Scroll Effects
 */
function initNavigation() {
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Basic Scroll Reveal Animation
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

/**
 * SPA-lite Content Router (Placeholder for Segment 2)
 */
const AppRouter = {
    navigate: (segment) => {
        console.log(`Navigating to ${segment}...`);
        // Future logic for dynamic segment loading
    }
};
