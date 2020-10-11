import styled from 'styled-components';
import colors from '../../styles/colorScheme';

const sidebarWidth = '6';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${sidebarWidth}rem;
  background-color: ${colors.backgroundLighter};
  box-shadow: 2px 0px 10px 0px ${colors.backgroundDarkder};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: width 200ms ease-in-out;

  :hover {
    width: 22rem;
    .nav-link-text {
      opacity: 1;
      transform: translateX(90px);
      transition-delay: 300ms;
    }

    .branding {
      .title {
        opacity: 1;
        transform: translateX(0);
        transition-delay: 300ms;
      }
    }
  }

  .branding {
    width: 100%;
    height: ${sidebarWidth}rem;
    background-color: ${colors.beige};
    display: flex;
    align-items: center;
    transition: filter 200ms;

    :hover {
      filter: brightness(1.1);
    }

    .logo {
      width: ${sidebarWidth - 0.5}rem;
      height: ${sidebarWidth - 0.5}rem;
    }

    .title {
      font-size: 50px;
      color: ${colors.brown};
      margin: auto;
      opacity: 0;
      transform: translateX(-300px);
      transition: opacity 100ms;
    }
  }

  .nav-list {
    margin: auto 0;
    .nav-link {
      margin: 0 0.5rem;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: ${sidebarWidth - 1}rem;
      width: calc(100% - 1rem);
      background-color: ${colors.beige};
      color: ${colors.brown};
      font-weight: bold;
      border-radius: ${sidebarWidth}rem;
      margin-bottom: 15px;
      transition: filter 200ms;

      :hover {
        filter: brightness(1.1);
      }

      .nav-link-icon {
        width: ${sidebarWidth - 1}rem;
        height: ${sidebarWidth - 1}rem;
        display: grid;
        place-items: center;

        .profile,
        .icon {
          width: 80%;
          height: 80%;
          border-radius: 100%;
          border: 2px solid ${colors.backgroundLighter};
          background-color: ${colors.backgroundLighter};
        }
      }
      :last-child() {
        margin-bottom: 50vh;
      }
    }
  }

  .nav-link-text {
    position: absolute;
    opacity: 0;
    transform: translateX(-400px);
    transition: opacity 100ms;
    font-size: 1.4rem;
  }
`;

export default Container;
