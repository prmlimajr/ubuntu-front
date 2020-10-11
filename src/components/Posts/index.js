import React, { Component } from 'react';

import Container from './styles';
import profileImg from '../../assets/Ellipse 88.png';
import renan from '../../assets/renan.jpg';
import thalys from '../../assets/thalys.jpg';

class Posts extends Component {
  state = {
    input: '',
    posts: [
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
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
    console.log(this.state.input);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    const user = {
      userprofile: profileImg,
      username: 'Paulo Lima',
      body: input,
      time: '11/10/2020 - 18:42',
    };

    this.setState({
      posts: [...this.state.posts, user],
    });
  };

  render() {
    return (
      <Container>
        <form>
          <h1>Nova conversa</h1>
          <div className='flex'>
            <input
              type='text'
              placeholder='Oque você fez hoje?'
              onChange={this.handleChange}
            />
            <button type='submit' onSubmit={this.handleSubmit}>
              iniciar conversa
            </button>
          </div>
        </form>
        {this.state.posts.map((post) => {
          return (
            <div className='post'>
              <div className='user'>
                <img src={post.userprofile} />
                <h1>{post.username}</h1>
              </div>
              <p>"{post.body}"</p>
              <p className='time'>{post.time}</p>

              {/* ADICIONAR BOTÃO DE VER COMENTARIOS */}
            </div>
          );
        })}
      </Container>
    );
  }
}

export default Posts;
