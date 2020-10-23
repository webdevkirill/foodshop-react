import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton, Toppings } from './OrderListItemStyled';
import { formatCurrency, totalPriceItems } from '../../../utils/utils';


export const OrderListItem = ({order}) => {

    const toppings = order.toppings
        .filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
        <OrderItemStyled>
            <ItemName>{order.name} {order.choice} </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton /> 
            {toppings && <Toppings>Допы: {toppings}</Toppings>}
        </OrderItemStyled>
    )
}