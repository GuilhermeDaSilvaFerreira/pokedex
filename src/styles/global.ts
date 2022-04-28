import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${(props) => props.theme.colors.background};

        font-size: 1.1rem;
        font-family: Roboto;
        font-weight: 400;
        color: #333;
    }
`;
