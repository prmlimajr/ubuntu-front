import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const Container = styled.ul`
  width: 100%;
  padding: 0 16px;
  margin: 16px 0;

  ul {
    width: 100%;
    height: 64px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      margin-right: 8px;

      img {
        border-radius: 100%;
        border: 2px solid ${colors.brown};
        cursor: pointer;
      }
    }
  }
`;

export default Container;
