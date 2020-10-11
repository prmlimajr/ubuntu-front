import React, { useState } from 'react';

import Container from './styles';

function Post({ profileImg, post }) {
  const [value, setValue] = useState();
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setValue('');
    setComments([...comments, value]);
    e.preventDefault();
  };

  return (
    <Container className='post'>
      <div className='user'>
        <img src={profileImg} alt='Paulo Lima' />
        <h1>Paulo Lima</h1>
      </div>
      <p className='post-text'>{post}</p>
      <p className='time'>11/10/2020</p>
      <form className='create-comment' onSubmit={handleSubmit}>
        <input
          className='comment-input'
          onChange={handleChange}
          value={value}
        />
        <button type='submit' className='post-comment'>
          Responder
        </button>
      </form>
      <div className='comments'>
        {comments.map((comment) => {
          return <p className='comment'>{comment}</p>;
        })}
      </div>
    </Container>
  );
}

export default Post;
