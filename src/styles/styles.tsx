import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: #f5f5f5;

        font-size: 1.1rem;
        font-family: sans-serif;
        color: #333;
    }
`;
