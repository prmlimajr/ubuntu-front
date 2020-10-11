import React from 'react';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';
import renan from '../../assets/renan.jpg';
import thalys from '../../assets/thalys.jpg';

function Posts() {
  const posts = [
    {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: 'Hoje eu decidi participar do Hackathon Focus!',
      time: '09/10/2020 - 13:42',
    },
    {
      userprofile: renan,
      username: 'Renan Brayner',
      body: 'Que Massa, vamos formar um time.',
      time: '10/10/2020 - 08:27',
    },
    {
      userprofile: thalys,
      username: 'Thalys Rossi',
      body: 'Pode contar comigo.',
      time: '10/10/2020 - 11:12',
    },
  ];
  return (
    <Container>
      <form>
        <h1>Nova conversa</h1>
        <div className='flex'>
          <input type='text' placeholder='Oque você fez hoje?' />
          <button type='submit'>iniciar conversa</button>
        </div>
      </form>
      {posts.map((post) => {
        return (
          <div className='post'>
            <div className='user'>
              <img src={post.userprofile} />
              <h1>{post.username}</h1>
            </div>
            <p>{post.body}</p>
            <p className='time'>{post.time}</p>
            <span>Comentários</span>
            {/* ADICIONAR BOTÃO DE VER COMENTARIOS */}
          </div>
        );
      })}
    </Container>
  );
}

export default Posts;
