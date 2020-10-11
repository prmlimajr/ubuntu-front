import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.div`
  padding-left: 8rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .search-container {
    padding-top: 2rem;
    padding-right: 7rem;
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .map {
    height: 100px !important;
    width: 50% !important;
  }
  form {
    background-color: ${colors.backgroundLighter};
    padding: 1rem 2rem;
    margin-bottom: 15px;
    border-radius: 16px;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      input {
        font-size: 1.2rem;
        padding: 1rem;
        width: 75%;
      }
      button {
        font-size: 1.2rem;
        width: 20%;
        border: none;
        background: ${colors.green};
        color: ${colors.backgroundLighter};
      }
    }
  }
`;

export default Container;
