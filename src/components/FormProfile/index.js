import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../styles/Form';

function FormProfile() {
  const history = useHistory();

  const handleSubmit = (e) => {
    history.push('/conectar');

    e.preventDefault();
  };

  return (
    <Form>
      <form className='form ' onSubmit={handleSubmit}>
        <h2>Defina o seu perfil:</h2>
        <div className='flex'>
          <div className='flex-item'>
            <label className='label' htmlFor='age'>
              Idade:
            </label>
            <input className='input' name='age' id='age' />
          </div>
          <div className='flex-item'>
            <label className='label' htmlFor='job'>
              Profissão:
            </label>
            <input className='input' name='job' id='job' />
          </div>
        </div>
        <label className='label' htmlFor='bio'>
          Resumo biográfico:
        </label>
        <input className='input' name='bio' id='bio' />

        <label className='label' htmlFor='technique'>
          Técnica do PVVE:
        </label>
        <input className='input' name='technique' id='technique' />
        <div className='divider' />
        <div className='grid'>
          <div className='grid-item'>
            <label className='label' htmlFor='cep'>
              CEP:
            </label>
            <input className='input' name='cep' id='cep' />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='city'>
              Cidade:
            </label>
            <input className='input' name='city' id='city' />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='address'>
              Endereço:
            </label>
            <input className='input' name='address' id='address' />
          </div>
          <div className='grid-item'>
            <label className='label' htmlFor='state'>
              Estado:
            </label>
            <input className='input' name='state' id='state' />
          </div>
        </div>
        <button type='submit' className='submit'>
          Cadastrar
        </button>
      </form>
    </Form>
  );
}

export default FormProfile;
