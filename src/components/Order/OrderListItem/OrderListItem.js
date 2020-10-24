import React from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton, Toppings } from './OrderListItemStyled';
import { formatCurrency, totalPriceItems } from '../../../utils/utils';


export const OrderListItem = ({order, index, deleteItem, setOpenItem}) => {

    const topping = order.topping
        .filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
        <OrderItemStyled onClick={() => setOpenItem({...order, index})} >
            <ItemName>{order.name} {order.choice} </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton onClick={() => deleteItem(index)} /> 
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
}