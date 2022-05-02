import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  ol,
  ul {
		list-style: none;
  }

  input {
  outline: none;
    &:focus {
      outline: none;
    }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:  'Noto Sans KR', sans-serif !important;
  }

	body {
    background-color: #ffffff;
  }
`;

export default GlobalStyle;
