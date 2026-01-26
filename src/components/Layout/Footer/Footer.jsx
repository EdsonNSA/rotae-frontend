import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Footer.css'; 
import imgrotae from '../../../images/ROTAE.png';

const Footer = () => {
  const infoContato = {
    telefone: '(81) 98830-6577',
    email: 'contato.rotae@gmail.com',
    endereco: 'Belo Jardim, Pernambuco - Brasil'
  };

  const linksUteis = [
    { name: 'Sobre Nós', path: '#' },
    { name: 'Termos de Uso', path: '#' },
    { name: 'Política de Privacidade', path: '#' },
    { name: 'Trabalhe Conosco', path: '#' },
    { name: 'Parceiros Premium', path: '#' },
  ];

  return (
    <footer className="ft-main-footer">
      <div className="ft-footer-content">
        
        <div className="ft-footer-section ft-footer-info">
          <Link to="/" className="ft-footer-logo-link">
            <img src={imgrotae} alt="ROTAÊ Logo" className="ft-footer-logo" />
            <span className="ft-footer-logo-text">ROTAÊ</span>
          </Link>
          <p className="ft-tagline">Seu guia definitivo para descobrir as belezas e a cultura de Belo Jardim.</p>
          
          <div className="ft-social-links">
            <a href="https://wa.me/558188306577" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/turismorotae_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:contato.rotae@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="ft-footer-section ft-footer-links">
          <h4>Veja Também</h4>
          <ul>
            {linksUteis.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-footer-section ft-footer-contact">
          <h4>Fale Conosco</h4>
          <p><FaPhone /> {infoContato.telefone}</p>
          <p><FaEnvelope /> {infoContato.email}</p>
          <p><FaMapMarkerAlt /> {infoContato.endereco}</p>
        </div>

      </div>
    
      <div className="ft-footer-bottom">
        <p>&copy; {new Date().getFullYear()} ROTAÊ - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;