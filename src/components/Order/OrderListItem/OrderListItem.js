import React, { useRef } from 'react';
import { ItemName, ItemPrice, OrderItemStyled, TrashButton, Toppings } from './OrderListItemStyled';
import { formatCurrency, totalPriceItems } from '../../../utils/utils';


export const OrderListItem = ({order, index, deleteItem, setOpenItem}) => {

    const refDeleteButton = useRef(null);

    const topping = order.topping
        .filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
        <OrderItemStyled onClick={(e) => 
        e.target !== refDeleteButton.current && setOpenItem({...order, index})} >
            <ItemName>{order.name} {order.choice} </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} /> 
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
}