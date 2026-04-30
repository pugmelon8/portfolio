document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HERO BURST ANIMATION ---
    // Added safety check: only runs if 'hero' exists
    const hero = document.getElementById('hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('loaded');
        }, 400);
    }

    // --- 2. LOAD MORE LOGIC ---
    const grid = document.getElementById('project-grid');
    const loadBtn = document.getElementById('load-more-btn');

    // Added safety check: only runs if BOTH the grid and the button are on the page
    if (grid && loadBtn) {
        const cards = Array.from(grid.querySelectorAll('.project-card'));
        const limit = 4; // Number of items to show initially

        // 1. Initial State: Hide items beyond the limit
        if (cards.length <= limit) {
            loadBtn.style.display = 'none'; 
        } else {
            cards.forEach((card, index) => {
                if (index >= limit) card.classList.add('is-hidden');
            });
        }

        // 2. Click Event
        loadBtn.addEventListener('click', () => {
            cards.forEach(card => card.classList.remove('is-hidden'));
            loadBtn.style.display = 'none';

            // 3. Centering Logic: If the total is odd, center the last one
            if (cards.length % 2 !== 0) {
                cards[cards.length - 1].classList.add('centered-last');
            }
        });
    }

    // --- 3. FOOTER INJECTION ---
    // This is now "safe" and will run on every page!
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
