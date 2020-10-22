import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton } from './OrderListItemStyled';


export const OrderListItem = ({order}) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{order.price.toLocaleString(
                    'ru-RU', 
                    {style: 'currency', currency: 'RUB'})}</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
)