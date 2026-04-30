document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Trigger Hero Burst
    setTimeout(() => {
        const hero = document.getElementById('hero');
        if(hero) hero.classList.add('loaded');
    }, 400);

    // 2. Inject Reusable Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <section class="contact-section">
                <img src="images/contact-icon.png" class="contact-icon" alt="Logo">
                <h2>Ready to build something amazing?</h2>
                <p>I'd love to connect with you!</p>
                <div class="contact-container">
                    <a href="mailto:hoangmaivy.work@gmail.com" class="contact-item">
                        <span>Email</span>
                        <span>hoangmaivy.work@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/vy-hoang-hiimvy21" target="_blank" class="contact-item">
                        <span>LinkedIn</span>
                        <span>linkedin.com/in/vy-hoang...</span>
                    </a>
                </div>
                <img src="images/logo.png" class="footer-logo" alt="Logo">
            </section>
        `;
    }
});