import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		padding: 0px;
		margin: 0;
	}
`;

export default GlobalStyle;
