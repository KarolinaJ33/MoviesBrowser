import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg"

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.black};
    display: grid;
    justify-items: center;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-top: 32px;
    }
`;

export const StyledSpinner = styled(Spinner)`
    margin: 120px auto 24px;
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.grayish};
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 60px;
        width: 32px;
    }
`;