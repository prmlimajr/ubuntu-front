import React from 'react';

import Posts from '../../components/Posts';
import Connections from '../../components/Connections';
import Interests from '../../components/Interests';
import Container from './styles';

import profileImg from '../../assets/Ellipse 88.png';

function Profile() {
  return (
    <Container>
      <Posts />
      <div className='profile-bar'>
        <div className='profile'>
          <img className='profile-img' src={profileImg} alt='Foto de perfil' />
          <div className='profile-text'>
            <h1 className='username'>Paulo Lima</h1>
            <p className='status'>Técnica: 12</p>
          </div>
        </div>
        <Connections />
        <Interests />
      </div>
    </Container>
  );
}

export default Profile;
