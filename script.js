document.addEventListener('DOMContentLoaded', () => {
    
    // --- HERO BURST ANIMATION ---
    setTimeout(() => {
        const hero = document.getElementById('hero');
        if(hero) hero.classList.add('loaded');
    }, 400);

    // --- LOAD MORE LOGIC ---
    const grid = document.getElementById('project-grid');
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const loadBtn = document.getElementById('load-more-btn');
    const limit = 4; // Number of items to show initially

    // 1. Initial State: Hide items beyond the limit
    if (cards.length <= limit) {
        loadBtn.style.display = 'none'; // Hide button if we have 4 or fewer
    } else {
        cards.forEach((card, index) => {
            if (index >= limit) card.classList.add('is-hidden');
        });
    }

    // 2. Click Event
    loadBtn.addEventListener('click', () => {
        // Show all cards
        cards.forEach(card => card.classList.remove('is-hidden'));
        
        // Hide the button
        loadBtn.style.display = 'none';

        // 3. Centering Logic: If the total is odd, center the last one
        if (cards.length % 2 !== 0) {
            cards[cards.length - 1].classList.add('centered-last');
        }
    });

    // --- FOOTER INJECTION ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <section class="contact-section">
                <img src="images/mascot.png" class="mascot-icon" alt="Mascot Icon">
                <h2>Contacts</h2>
                <p>I'd love to connect with you!</p>
                <div class="contact-container">
                    <a href="mailto:hoangmaivy.work@gmail.com" class="contact-item">
                        <span>Email</span>
                        <span>hoangmaivy.work@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/vy-hoang-hiimvy21" target="_blank" class="contact-item">
                        <span>LinkedIn</span>
                        <span>linkedin.com/in/vy-hoang-hiimvy21</span>
                    </a>
                </div>
                <img src="images/logo.png" class="footer-logo" alt="Logo">
                <!-- <p style="font-size: 0.8rem; margin-top: 20px; color: #999;">© 2026 Designed by Vy Hoang</p> -->
            </section>
        `;
    }
});
