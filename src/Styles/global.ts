import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f6f3ea;
        -webkit-font-smoothing: antialiased;
        font: 16px Roboto Mono, sans-serif
    }

    button {
        cursor: pointer;
    }
`;
