import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { OrderContent, OrderList, OrderStyled, OrderTitle, Total } from './OrderStyles';

export const Order = () => {

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                <OrderList>

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