import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  .post {
    width: 100%;
    background-color: ${colors.backgroundLighter};
    margin-bottom: 15px;
    border-radius: 16px;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .user {
      margin-right: auto;
      display: flex;
      flex-direction: row;
      img {
        width: 3rem;
        height: 3rem;
      }
      h1 {
        font-size: 1.5rem;
        padding: 0 1rem;
      }
    }
    .time {
      margin-left: auto;
    }
    .post-text {
      padding: 0.5rem;
      width: 80%;
      text-align: center;
      overflow-wrap: break-word;
    }
    .create-comment {
      .comment-input {
        border-radius: 8px;
        padding: 1rem;
        border: 1px solid ${colors.backgroundDarkder};
      }

      .post-comment {
        padding: 1rem;
        margin-left: 15px;
        border-radius: 8px;
        border: none;
        background-color: ${colors.brown};
      }
    }
  }
`;

export default Container;
