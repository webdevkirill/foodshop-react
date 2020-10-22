import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency } from '../../utils/utils';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { EmptyList, OrderContent, OrderList, OrderStyled, OrderTitle, Total, TotalOrderPrice } from './OrderStyles';

export const Order = ({orders}) => {

    let totalOrderCount = 0; 
    let totalOrderPrice = 0;

    orders.forEach((item) => {
        totalOrderCount += item.count;
        totalOrderPrice += totalPriceItems(item);
    })

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length > 0 ?
                <OrderList>
                    {
                        orders.map(order => <OrderListItem order={order} />)
                    }
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>
                }
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalOrderCount}</span>
                <TotalOrderPrice>{formatCurrency(totalOrderPrice)}</TotalOrderPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}