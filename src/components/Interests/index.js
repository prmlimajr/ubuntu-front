import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import Container from './styles';

class Interests extends Component {
  state = {
    interests: [
      'Aprender a dirigir',
      'Estudar para concurso',
      'Ter uma alimentação saudável',
      'Encontrar parceiros para participar de um Hackathon',
    ],
    input: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;

    this.setState({
      interests: [...this.state.interests, input],
    });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
    console.log(this.state.input);
  };
  render() {
    const { interests } = this.state;
    return (
      <Container>
        <h1>Meus interesses</h1>
        {interests.length > 0 ? (
          interests.map((el) => <p>{el}</p>)
        ) : (
          <p className='error'>
            Ops! Parece que você não tem nenhum interesse.
          </p>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='adicionar interesse'
            onChange={this.handleChange}
          />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>
      </Container>
    );
  }
}
export default Interests;
