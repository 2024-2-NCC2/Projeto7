import React from 'react';
import './comunidade.css';
import logoNavBar from '../assets/imagens/imagem-logo/logo.png';
import { Link } from 'react-router-dom';
import Formulario from '../components/Formulario';

const Comunidade = () => (
  <div className="comunidade">
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            VitalForm
            <img src={logoNavBar} alt="Logo VitalForm" height="50" width="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nutrição">Nutrição</Link></li>
              <li><Link to="/comunidade">Comunidade</Link></li>
              <li><Link to="/fitness">Fitness</Link></li>
              <li><Link to="/bemestar">Bem Estar</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Bem-vindo à Comunidade!</h1>
      <p>Aqui você pode interagir com outros usuários, compartilhar conteúdos e explorar recursos exclusivos.</p>
    </header>
    
    <div className='formulario'>
      <Formulario />
      <div className="telegram-link">
        <p>
          Entre na nossa comunidade do 
          <a href="https://t.me/link" target="_blank" rel="noopener noreferrer"> Telegram</a>
        </p>
      </div>
    </div>
  </div>
);

export default Comunidade;