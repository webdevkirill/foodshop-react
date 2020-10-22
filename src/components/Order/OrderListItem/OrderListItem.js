import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton } from './OrderListItemStyled';
import { formatCurrency } from '../../../utils/utils';


export const OrderListItem = ({order}) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{formatCurrency(order.price)}</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
)