import styled from "styled-components";
import { getTypeColor } from "../../util/commom";

interface IProps {
    type: string;
}

export const Section = styled.section<IProps>`
    height: 20vh;
    width: 100%;

    display: flex;
    flex-direction: row-reverse;

    padding: 0 70px;

    border: 3px solid ${(props) => getTypeColor(props.type)};
    border-top-left-radius: 70px;

    opacity: 0.3;

    .down-arrow {
        height: 25px;

        margin-top: 20px;

        align-self: flex-start;
    }

    .details {
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;

        gap: 20px;

        .about {
            height: 100%;
            width: 40%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            padding: 10px 20px;
            gap: 10px;

            .bio {
                display: flex;
                flex-direction: row;
                gap: 5px;

                .id {
                    color: #a4a4a4;
                    font-size: 1.6rem;
                }

                .name {
                    text-transform: capitalize;
                    font-size: 1.6rem;
                }
            }

            .type-icon {
                height: 28px;
                margin: 0 10px 10px 0;
            }

            .description {
                display: flex;
                align-items: center;
                justify-content: center;

                .down-arrow {
                    margin: auto;

                    opacity: 0.5;

                    cursor: pointer;
                }

                .down-arrow.right {
                    transform: rotate(-90deg);
                }

                .down-arrow.left {
                    transform: rotate(90deg);
                }

                .flavor-text {
                    width: 100%;

                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    margin: 0 10px;
                }
            }
        }

        .pokemon-image {
            height: 100%;

            margin-right: 45px;
        }
    }

    &.highlight-1 {
        height: 22vh;

        opacity: 1;
        transition: 0.5s ease-out;
    }

    &.highlight-2 {
        height: 35vh;

        background-color: ${(props) => getTypeColor(props.type)};

        opacity: 1;
        transition: 0.8s cubic-bezier(0.15, 0.5, 0.35, 1);
    }
`;
