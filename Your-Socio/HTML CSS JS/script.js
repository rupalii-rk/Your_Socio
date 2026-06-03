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

    // 3D Tilt Effect for Cards
    const tiltCards = document.querySelectorAll('.tilt-card, .value-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(255, 60, 0, 0.2)`;
            card.style.borderColor = `rgba(255, 60, 0, 0.5)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            card.style.boxShadow = `0 15px 30px rgba(0,0,0,0.2)`;
            card.style.borderColor = `#333`;
        });
    });
});
