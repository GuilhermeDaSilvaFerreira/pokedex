import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;

    background-color: #f56b09;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: #fff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);

    .pokeball-icon {
        height: 40px;

        animation: spin 1.6s linear infinite;
    }

    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;
