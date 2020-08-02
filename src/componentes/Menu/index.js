import React from 'react';
import {  Link } from 'react-router-dom';
import logosleip from '../../assets/img/logo-sleipflix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './componentes/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="logosleip" src={logosleip} alt="logo da firma" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu