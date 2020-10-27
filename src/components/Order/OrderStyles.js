import styled from 'styled-components';

export const OrderStyled = styled.section`
    position: fixed;
    top: 4rem;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 19rem;
    height: calc(100% - 4rem);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 1rem;
`;

export const OrderContent = styled.div`
    flex-grow: 1;
`;

export const OrderList = styled.ul`

`;

export const EmptyList = styled.p`
    text-align: center;
`;