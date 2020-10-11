import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  width: 50%;
  margin-right: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
  }
  form {
    background-color: ${colors.backgroundLighter};
    border-radius: 16px;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0px 2px 10px 0px ${colors.backgroundDarkder};
    margin-bottom: 15px;

    h1 {
      margin-bottom: 15px;
    }

    input {
      font-size: 1.2rem;
      width: 75%;
      padding: 8px;
    }

    button {
      font-size: 1.2rem;
      font-weight: bold;
      width: 20%;
      border: 0;
      background-color: ${colors.green};
      color: ${colors.backgroundLighter};
    }

    .flex {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

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
      font-size: 12px;
    }

    span {
      font-size: 12px;
      color: blue;
      cursor: pointer;
    }
  }
`;

export default Container;
