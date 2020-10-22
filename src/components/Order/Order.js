import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { EmptyList, OrderContent, OrderList, OrderStyled, OrderTitle, Total } from './OrderStyles';

export const Order = ({orders, setOrders}) => {

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
                <span>5</span>
                <span>850 Р</span>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}