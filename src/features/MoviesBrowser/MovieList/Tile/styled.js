import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    margin-top: 24px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin-bottom: 16px;
    }
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 24px;
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.darkerGrey};
    margin-bottom: 8px;
`;

export const Genres = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 16px -14px;
    padding-left: 0;
    color: ${({ theme }) => theme.colors.woodSmoke};
`;

export const Genre = styled.li`
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.mystic};
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    margin: 8px;
`;

export const Rate = styled.span`
    display: flex;
    align-items: center;
`;

export const RateBig = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-right: 8px;
    margin-left: 8px;
`;

export const RateLittle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin-right: 8px;
`;

export const Vouters = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
`;