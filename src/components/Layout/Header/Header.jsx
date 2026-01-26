import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logoImg from '../../../images/ROTAE.png';
import { FaHiking } from 'react-icons/fa';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="site-header">
      
      {/* LOGO (Imagem + Texto) */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
           {/* A Imagem da Logo voltou aqui: */}
           <img src={logoImg} alt="Rotaê Logo" className="header-logo-img" />
           <span className="header-logo-text">Rotaê</span>
        </Link>
      </div>

      {/* Ícone Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Principal */}
      <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Início</Link></li>
          <li><Link to="/roteiros" className={`nav-link ${isActive('/roteiros')}`} onClick={closeMenu}>Roteiros</Link></li>
          <li><Link to="/lugares" className={`nav-link ${isActive('/lugares')}`} onClick={closeMenu}>Lugares</Link></li>
          <li><Link to="/eventos" className={`nav-link ${isActive('/eventos')}`} onClick={closeMenu}>Eventos</Link></li>
        </ul>
      </nav>

      {/* Botão de Parceiro Restaurado */}
            <div className="header-actions">
                <a 
                    href="mailto:contato.rotae@gmail.com?subject=Quero ser um parceiro Rotaê" 
                    className="create-button"
                >
                    <FaHiking size={18} /> Torne-se Parceiro
                </a>
            </div>

    </header>
  );
}

export default Header;