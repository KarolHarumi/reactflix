import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Karolflix" />
            </a>
            
            <a href="/" className="ButtonLink">Novo vídeo</a>
        </nav>
    );
}

export default Menu;