import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 20px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        background-color: #f0f0f0;
        font-family: Roboto, sans-serif;
        color: #000;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h1, h2, h3, p {
        padding: 0;
        margin: 0;
    }
    h1, h2, h3 {
        font-family: Pacifico, cursive;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    button {
        cursor: pointer;
    }
    button, input, input:active, textarea, textarea:active {
        outline: none;
        font: inherit;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button, 
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;