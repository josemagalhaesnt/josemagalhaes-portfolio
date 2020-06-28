import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Roboto:wght@100;300;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3 {
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
`;
