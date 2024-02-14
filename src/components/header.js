import React from "react";
import "../styles/header.css";

function Header () {
    return (
        <div>
        <nav className="nav">
            <a className="title">DEMO Video</a>
            <ul className="menu">
                <li className="login">
                    <a className="nav__link">Inicia sesion</a>
                </li>
                <li className="start">
                    <a className="nav__link">Inicia tu prueba gratuita</a>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Header; 
