document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Basic toggle for mobile (you can enhance this with a proper mobile menu CSS class later)
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // Slider for Featured Creators
    const slider = document.getElementById('fc-slider');
    const nextBtn = document.getElementById('slider-next');

    if (slider && nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Scroll right by roughly one card width + gap
            slider.scrollBy({ left: 300, behavior: 'smooth' });
            
            // Check if reached end to loop back (optional)
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                setTimeout(() => {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                }, 500);
            }
        });
    }

    // Newsletter Form Submission
    const nlForm = document.getElementById('nl-form');
    if (nlForm) {
        nlForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('nl-email');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }
});