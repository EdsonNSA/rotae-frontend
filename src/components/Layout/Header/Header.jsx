import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import imgRotae from '../../../images/ROTAE.png'; 
import { FaHiking } from 'react-icons/fa';

const Header = () => {

    const renderNavLinks = () => (
        <nav className="main-nav">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/roteiros" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Roteiros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lugares" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Lugares
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/eventos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Eventos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

    return (
        <header className="site-header">
            
            <div className="logo">
                <Link to="/">
                    <img src={imgRotae} alt="RotaÊ Logo" className="header-logo-img" />
                    <span className="header-logo-text">ROTAÊ</span>
                </Link>
            </div>
            
            {renderNavLinks()}

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
};

export default Header;