import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const HeaderContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  padding: 2rem;

  .logo {
    img {
      width: 4rem;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2rem;

    font-size: 1.25rem;

    a {
      color: #fff;
      transition: color 0.2s;

      & + a {
        margin-left: 1rem;
      }

      &:hover {
        color: ${theme.colors.titleHover};
      }
    }
  }

  .search {
    /* width: 5rem; */
    margin-left: auto;

    /* input {
      height: 1.5rem;
      padding: 0.5rem;

      background-color: #E7E9EE;
      border: none;
      border-radius: 1rem;

      font-size: 1rem;
      color: #222;

      &::placeholder {
        color: #969CB2;
      }
    } */
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    flex-direction: column;
    padding: 1rem;

    .logo {
      margin: 1.5rem 0;

      img {
        width: 150px;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 0;
      margin-bottom: 1rem;

      a + a {
        margin-left: 2rem;
      }
    }

    .search {
      margin-left: 0;
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
  }

  @media (max-width: ${theme.screenSize.laptop}) {
  }
`;
