import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton } from './OrderListItemStyled';
import { formatCurrency, totalPriceItems } from '../../../utils/utils';


export const OrderListItem = ({order}) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton />
    </OrderItemStyled>
)