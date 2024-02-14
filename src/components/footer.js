import React from "react";
import '../styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a>Inicio</a>
                <span>|</span>
                <a>Terminos y condiciones</a>
                <span>|</span>
                <a>Politicas de privacidad</a>
                <span>|</span>
                <a>Colecciones Statement</a>
                <span>|</span>
                <a>Ayuda</a>
                <span>|</span>
                <a>Manejo de cuenta</a>
            </div>
            <div className="rights__content">
                <p> Copyright &copy; 2024 DEMO Streaming Todos los derechos reservados</p>
            </div>
            <div className="media__content">
                <div className="social__icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                <div className="image__content">
                    <img
                        src="https://cdn.freecodecamp.org/platform/universal/apple-store-badge.svg"
                        lang="en"
                        alt="Download on the App Store"
                        style={{ width: '120px', height: 'auto' }}
                    />
                    <img
                        src="https://cdn.freecodecamp.org/platform/universal/google-play-badge.svg"
                        lang="en"
                        alt="Get it on Google Play"
                        style={{ width: '120px', height: 'auto' }}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;