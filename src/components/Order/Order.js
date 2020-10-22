import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { OrderContent, OrderList, OrderStyled, OrderTitle, Total } from './OrderStyles';

export const Order = () => {

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem />
                    <OrderListItem />
                    <OrderListItem />
                </OrderList>
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