 // Initialize ScrollReveal with default config
const sr = ScrollReveal({
    origin: 'bottom',    // Animation starts from bottom
    distance: '50px',    // How far the element moves
    duration: 1000,      // Animation duration in milliseconds
    delay: 200,          // Delay before animation starts
    reset: false         // Don't replay animation when scrolling back up
});

// Disable animations for navbar elements
document.querySelector('nav.navbar').style.opacity = '1';
document.querySelector('.offcanvas').style.opacity = '1';

// Add reveal animations to elements
document.addEventListener('DOMContentLoaded', function() {
    // About Us Section
    sr.reveal('#spaces', { 
        interval: 300,
        viewFactor: 0.2
    });

    // Department Sections - each department will animate separately
    document.querySelectorAll('.container-fluid[style*="background-color: #F7F7F7"] .container #spaces').forEach(element => {
        sr.reveal(element, {
            interval: 300,
            viewFactor: 0.2
        });
    });

    // Authorization Section
    sr.reveal('#authorization', {
        interval: 300,
        viewFactor: 0.2
    });

    // Admission Section
    sr.reveal('.container-fluid:not([style*="background-color"]) .container', {
        interval: 300,
        viewFactor: 0.2
    });

    // News/Events Section
    sr.reveal('.container-fluid[style*="background-color:#F7F7F7"] .container', {
        interval: 300,
        viewFactor: 0.2
    });

    // Testimonials Section - target the container around the carousel
    sr.reveal('#testimonialSection', {
        interval: 300,
        viewFactor: 0.2
    });

    // Video Section Animation
    sr.reveal('#video-section', {
        origin: 'bottom',
        distance: '50px',
        duration: 1200,
        delay: 300,
        viewFactor: 0.3,
        opacity: 0,
        scale: 0.9,
        easing: 'ease-in-out'
    });

    // Footer
    sr.reveal('.container-fluid[style*="background-color: #333333"] .container', {
        interval: 300,
        viewFactor: 0.2
    });
});
