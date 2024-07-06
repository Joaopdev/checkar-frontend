import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    }

    /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    ${({ theme }) => css`
      background: ${theme.colors.tertiary};
    `}
  }

  *::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
      background: ${theme.colors.secondary};
      width: 2px;
      border-radius: 20px;
    `}
  };
`;


