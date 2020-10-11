import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas } from 'react-icons/fa';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';
import logo from '../../assets/logo.png';

import Api from '../../services/api';

class Sidebar extends Component {
  state = {
    profilePic: null,
  };

  componentDidMount = async () => {
    const profilePic = await Api.get('/avatar');
    console.log(profilePic);
    this.setState({
      profilePic,
    });
    console.log(this.state);
  };

  render() {
    const pathname = window.location.pathname;
    if (pathname === '/' || pathname === '/cadastro') {
      return null;
    } else {
      return (
        <Container>
          <div className='branding'>
            <img className='logo' src={logo} />
            <h1 className='title'>Ubuntu</h1>
          </div>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <div className='nav-link-icon'>
                  <img
                    className='profile'
                    src={profileImg}
                    alt='Foto de perfil'
                  />
                </div>
                <div className='nav-link-text'>Meu Perfil</div>
              </Link>
              <Link className='nav-link' to='/'>
                <div className='nav-link-icon'>
                  <FaGlobeAmericas className='icon' />
                </div>
                <div className='nav-link-text'>Procurar Conexões</div>
              </Link>
            </li>
          </ul>
        </Container>
      );
    }
  }
}

export default Sidebar;
