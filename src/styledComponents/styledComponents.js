import styled from "styled-components";

// Styled Component
export const Container = styled.section`
    border: solid 1px salmon;
    padding: 1rem;
    color: #222;
    background-color: rgba(255, 255, 255, 0.5);
`;

export const Button = styled.button`
    margin: 0.3rem;
    border: solid 1px olive;
    transition: 320ms;
    color: ${({ color }) => color};
    background-color: ${({ theme, bgColor }) => bgColor || theme?.bgColors?.orange || "black"};
    ${({ size }) => {
        switch (size) {
            case "sm":
                return `
                    padding: 1rem;
                    font-size: 0.7rem;
                `;
            case "md":
                return `
                    padding: 1.5rem;
                    font-size: 1.2rem;
                `;
            case "lg":
                return `
                    padding: 2rem;
                    font-size: 2.3rem;
                `;
        }
    }};
    &:hover {
        opacity: 0.2;
    }
`;

export const Anchor = styled(Button)`
    text-decoration: none;
    display: inline-block;
`;