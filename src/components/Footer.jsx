import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/CodeLib">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/CodeLib">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/CodeLib">
          <FaLinkedin />
        </a>
        <a href="mailto:CodeLib@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 CodeLib. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
