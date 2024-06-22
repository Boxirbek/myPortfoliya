import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>Contact me at: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            
        </footer>
        
    );
}

export default Footer;
