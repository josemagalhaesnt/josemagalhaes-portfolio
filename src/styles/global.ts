import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   
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

    small {
        font-size: 1.5rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
    }
`;
