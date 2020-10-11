import React from 'react';

import FormLogin from '../../components/FormLogin';

import Container from './styles';
import logo from '../../assets/logo.png';

function Landing() {
  return (
    <Container>
      <div className='text'>
        <h1 className='title'>
          <img className='logo' src={logo}></img>Konnekto
        </h1>
        <p className='paragraph'>
          Uma plataforma para auxiliar na construção do seu
          <br />
          PPVE, buscar outras pessoas com os mesmos
          <br />
          interesses, encontrar apoio para objetivos
          <br />
          específicos e ajudar o próximo.
        </p>
      </div>
      <FormLogin />
    </Container>
  );
}

export default Landing;
