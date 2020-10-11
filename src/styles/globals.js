import { createGlobalStyle } from 'styled-components';
import colors from './colorScheme';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.background};
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
  }

  button,
  input,
  textarea {
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalStyle;
