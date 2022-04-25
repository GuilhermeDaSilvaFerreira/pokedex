import styled from "styled-components";

export const Section = styled.section`
    height: 25vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;

    padding: 20px;

    .name {
        text-transform: capitalize;
    }

    .pokemon-image {
        height: 100%;
    }
`;
