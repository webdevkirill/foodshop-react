import styled from 'styled-components';
import trashLogo from '../../../img/trash.svg';

export const OrderItemStyled = styled.li`
    display: flex;
    margin: 0.75rem 0;
`;

export const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-color: transparent;
    background: url(${trashLogo}) center no-repeat;
    background-size: cover;
`;

export const ItemName = styled.span`
    flex-grow: 1;
`;

export const ItemPrice = styled.span`
    margin: 0 0.5rem 0 1rem;
    min-width: 3.25rem;
    text-align: right;
`;