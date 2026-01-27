import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';
import './Footer.css'; 
import imgrotae from '../../../images/ROTAE.png';
import imgEquipe from '../../../images/equipe_rotae.jpg'; 

const Footer = () => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const openPopup = () => setShowAboutPopup(true);
  const closePopup = () => setShowAboutPopup(false);

  const infoContato = {
    telefone: '(81) 98830-6577',
    email: 'contato.rotae@gmail.com',
    endereco: 'Belo Jardim, Pernambuco - Brasil'
  };

  const linksUteis = [
    { name: 'Termos de Uso', path: '#' },
    { name: 'Política de Privacidade', path: '#' },
    { name: 'Trabalhe Conosco', path: '#' },
  ];

  return (
    <>
      <footer className="ft-main-footer">
        <div className="ft-footer-content">
          
          <div className="ft-footer-section ft-footer-info">
            <Link to="/" className="ft-footer-logo-link">
              <img src={imgrotae} alt="ROTAÊ Logo" className="ft-footer-logo" />
              <span className="ft-footer-logo-text">ROTAÊ</span>
            </Link>
            <p className="ft-tagline">Seu guia definitivo para descobrir as belezas e a cultura de Belo Jardim.</p>
            
            <div className="ft-social-links">
              <a href="https://wa.me/558188306577" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/turismorotae_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:contato.rotae@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
          
          <div className="ft-footer-section ft-footer-about">
              <button className="ft-about-trigger-btn" onClick={openPopup}>
                Sobre o Rotaê
              </button>
              <p className="ft-about-text">
                  Onde o mapa encontra a alma. Nascemos para conectar turistas à essência de Belo Jardim.
              </p>
              <button className="ft-read-more-btn" onClick={openPopup}>
                Saiba Mais Sobre o Projeto
              </button>
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

      {showAboutPopup && (
        <div className="ft-modal-overlay" onClick={closePopup}>
          <div className="ft-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="ft-close-modal-btn" onClick={closePopup}>
              <FaTimes />
            </button>
            
            <div className="ft-modal-content-scroll">
              <div className="ft-about-image-wrapper">
                <img src={imgEquipe} alt="Equipe RotaÊ" className="ft-about-team-img" 
                     onError={(e) => {e.target.style.display='none'; e.target.parentNode.classList.add('no-image')}}/>
              </div>

              <h2>ROTAÊ: Onde o mapa encontra a alma.</h2>
              
              <p className="highlight-intro">Existem lugares que o GPS alcança, mas só o ROTAÊ apresenta.</p>

              <p>Acreditamos que viajar para uma cidade pequena não deveria ser um desafio de adivinhação. Não deveria ser sobre "onde tem um hotel?", mas sim sobre "onde está a melhor conversa?", "quem faz o melhor doce?" e "qual é o segredo que só quem mora aqui conhece?".</p>

              <p>Por muito tempo, o turismo esqueceu o que realmente importa: as pessoas. O RotaÊ nasceu para derrubar esses muros.</p>

              <h3>O ROTAÊ nasceu para derrubar esses muros.</h3>
              
              <p>Nós somos a ponte. Somos o atalho que não corta caminho, mas que te leva direto ao coração da cidade. Criamos uma tecnologia que, em vez de te isolar em uma tela, te convida a olhar para o lado.</p>

              <ul>
                <li><strong>Para o turista:</strong> a segurança de saber para onde ir.</li>
                <li><strong>Para o morador local:</strong> o palco para mostrar seu valor.</li>
              </ul>

              <div className="ft-team-section">
                <h3>Quem faz acontecer</h3>
                <div className="ft-team-grid">
                    
                    <div className="ft-team-card">
                        <strong className="ft-team-name">Jeniffer Lohane</strong>
                        <span className="ft-team-role">Administração</span>
                    </div>

                    <div className="ft-team-card">
                        <strong className="ft-team-name">Adriele Evangelista</strong>
                        <span className="ft-team-role">Engenharia de Controle e Automação</span>
                    </div>

                    <div className="ft-team-card">
                        <strong className="ft-team-name">Emilly Eviny</strong>
                        <span className="ft-team-role">Desenvolvimento de software</span>
                    </div>

                    <div className="ft-team-card">
                        <strong className="ft-team-name">Iara Júllia</strong>
                        <span className="ft-team-role">Administração</span>
                    </div>

                    <div className="ft-team-card">
                        <strong className="ft-team-name">Edson Nunes</strong>
                        <span className="ft-team-role">Engenharia de Computação</span>
                    </div>

                </div>
              </div>

              <p className="final-statement">
                Porque a gente sabe: a melhor viagem não é aquela em que você apenas passa pela cidade. <span className="accent-text">É aquela em que a cidade passa por você.</span>
              </p>
              
              <p className="signature">ROTAÊ. Conectando você à essência de cada lugar.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;