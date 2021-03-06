import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    a{
        text-decoration: none;
    }
    html {
        font-family: 'Montserrat', sans-serif;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }

`;

export const Container = styled.div`
	width: 100%;
	padding-inline: 20px;
	margin-inline: auto;

	@media screen and (min-width: 1440px) {
		max-width: 1440px;
	}
`;

export default GlobalStyle;
