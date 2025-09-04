window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    setTimeout(function () {
        loading.classList.add('fade-out');
        setTimeout(function () {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach((section) => {
        section.classList.remove('active');
    });
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach((btn) => {
        btn.classList.remove('active');
    });
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    // Add active class to clicked button
    event.target.classList.add('active');
    // Smooth scroll to top of content
    document.querySelector('.nav').scrollIntoView({ behavior: 'smooth' });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function () {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.card, .feature-card, .metric-card').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    // Add hover effects to timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
