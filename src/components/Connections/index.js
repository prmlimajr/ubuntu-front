import React from 'react';

import Container from './styles';

// import profileImg from '../../assets/Ellipse 88.png';
import renan from '../../assets/renan.jpg';
import thalys from '../../assets/thalys.jpg';

function Connections() {
  return (
    <Container>
      <h1>Minhas conexões</h1>
      {/* usar .map nos dados do bd para gerar lista */}
      <ul>
        <li classname='connections-item'>
          <img
            className='connection-profile-img'
            src={thalys}
            width='40'
            height='40'
            alt='conexão'
          />
        </li>
        <li classname='connections-item'>
          <img
            className='connection-profile-img'
            src={renan}
            width='40'
            height='40'
            alt='conexão'
          />
        </li>
      </ul>
    </Container>
  );
}

export default Connections;
