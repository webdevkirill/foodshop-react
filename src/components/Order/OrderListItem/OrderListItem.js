import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton } from './OrderListItemStyled';


export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>2</span>
        <ItemPrice>750 Р</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
)