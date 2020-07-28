import React from 'react';
import logosleip from '../../assets/img/logo-sleipflix.png';
import './Menu.css';
import ButtonLink from './componentes/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logosleip" src={logosleip} alt="logo da firma" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu