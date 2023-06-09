import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    margin: auto;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px auto;
  }
`;