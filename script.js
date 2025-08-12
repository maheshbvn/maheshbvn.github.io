// --- JavaScript for Interactivity ---

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when a link is clicked
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // 2. Header Style on Scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('glass-effect', 'shadow-lg');
            } else {
                header.classList.remove('glass-effect', 'shadow-lg');
            }
        });
    }
    
    // 3. Scroll Animations
    const animatedElements = document.querySelectorAll('.scroll-animation');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // 4. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 5. Add hover effects to project cards
    const projectCards = document.querySelectorAll('.glass-effect');
    projectCards.forEach(card => {
        card.classList.add('project-card');
    });
    
    // 6. Add hover effects to social icons
    const socialIcons = document.querySelectorAll('a[target="_blank"] svg');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon');
    });
    
    // 7. Add button classes for enhanced styling
    const primaryButtons = document.querySelectorAll('a.bg-accent');
    primaryButtons.forEach(btn => {
        btn.classList.add('btn-primary');
    });
    
    const secondaryButtons = document.querySelectorAll('a.border-accent');
    secondaryButtons.forEach(btn => {
        btn.classList.add('btn-secondary');
    });
    
    // 8. Initialize animations on page load
    function initializeAnimations() {
        // Trigger initial animations for elements already in view
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            if (isInView) {
                el.classList.add('visible');
            }
        });
    }
    
    // Call initialization after a short delay to ensure proper rendering
    setTimeout(initializeAnimations, 100);
    
    // 9. Add loading animation for the page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // 10. Add scroll progress indicator (optional enhancement)
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // You can add a progress bar here if desired
        // console.log(`Scroll progress: ${scrollPercent.toFixed(2)}%`);
    }
    
    window.addEventListener('scroll', updateScrollProgress);
});

// 11. Utility function for smooth element highlighting
function highlightElement(elementId, duration = 2000) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.transition = 'all 0.3s ease';
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.5)';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = 'none';
        }, duration);
    }
}

// 12. Export functions for potential external use
window.PortfolioUtils = {
    highlightElement: highlightElement
};
