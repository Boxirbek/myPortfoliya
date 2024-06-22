import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            <div className="social-links">
                <a href="https://telegram.me/your-telegram" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://wa.me/your-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
        </section>
    );
}

export default Contact;
