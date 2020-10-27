import styled from 'styled-components';

export const Total = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const OrderTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`;

export const TotalOrderPrice = styled.span`
    margin-left: 1rem;
`;