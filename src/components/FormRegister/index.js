import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../styles/Form';

import Api from '../../services/api';

class FormRegister extends Component {
  state = {
    form: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  };

  handleChange = (e) => {
    let form = this.state.form;
    form[e.target.name] = e.target.value;

    this.setState({
      form,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = this.state.form;

    const data = { name, email, phone, password, confirmPassword };

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert('Favor preencher todos os dados.');
    }

    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Favor tentar novamente.');
    }

    try {
      Api.post('/users', { data });
    } catch (err) {
      alert('erro: ', err);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <form className='form'>
          <label className='label' htmlFor='name'>
            Nome
          </label>
          <input
            className='input'
            name='name'
            type='text'
            id='name'
            onChange={this.handleChange}
          />
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            name='email'
            type='text'
            id='email'
            onChange={this.handleChange}
          />
          <label className='label' htmlFor='phone'>
            Telefone
          </label>
          <input
            className='input'
            name='phone'
            type='text'
            id='phone'
            onChange={this.handleChange}
          />
          <label className='label' htmlFor='password'>
            Senha
          </label>
          <input
            className='input'
            name='password'
            type='password'
            id='password'
            onChange={this.handleChange}
          />
          <label className='label' htmlFor='confirmPassword'>
            Repita a senha
          </label>
          <input
            className='input'
            name='confirmPassword'
            type='password'
            id='confirmPassword'
            onChange={this.handleChange}
          />
          <Link to='/' className='submit'>
            Cadastrar
          </Link>
          {/* <button className='submit' type='submit'>
            Cadastrar
          </button> */}
          <Link className='cancel' to='/'>
            Cancelar
          </Link>
        </form>
      </Form>
    );
  }
}

export default FormRegister;
