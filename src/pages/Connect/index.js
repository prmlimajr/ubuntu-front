import React, { Component } from 'react';
import MapContainer from '../../components/MapContainer';
import MapContainerClean from '../../components/MapContainerClean';
import Container from './styles';

import './styles.css';

class Connect extends Component {
  state = {
    ok: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ok: true,
    });
  };

  render() {
    const { ok } = this.state;
    return (
      <>
        <Container>
          <div className='search-container'>
            {/* <SearchUsers /> */}
            <form onSubmit={this.handleSubmit}>
              <h1>Procure por quem se interessa pelo mesmo que você</h1>
              <div className='flex'>
                <input type='text' />
                <button type='submit'>Buscar</button>
              </div>
            </form>
          </div>
          {ok ? (
            <MapContainer className='map' />
          ) : (
            <MapContainerClean className='map' />
          )}
        </Container>
      </>
    );
  }
}

export default Connect;
