import React from 'react';
import { Overlay } from '../../../UI/Modal/Overlay';
import { OrderTitle, Total, TotalOrderPrice } from '../../../UI/Order/Order';
import { ButtonCheckout } from '../../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../../../utils/utils';
import { Header, Modal } from './OrderConfirmStyles';

export const OrderConfirm = ({
    orders, setOrders, autentification, 
    setOpenOrderConfirm, firebaseDatabase
}) => {

    const dataBase = firebaseDatabase();

    const total = orders.reduce((res, order) => 
        totalPriceItems(order) + res, 0)

    const rulesData = {
        name: ['name'],
        price: ['price'],
        count: ['count'],
        toppings: [
            'topping', 
            toppings => toppings
                .filter(topping => topping.checked)
                .map(topping => topping.name),
            toppings => toppings.length > 0 ? toppings : 'no toppings'
        ],
        choice: ['choice', item => item ? item : 'no choices']
    };

    const sendOrder = (databese, orders, autentification) => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            clientName: autentification.displayName,
            email: autentification.email,
            order: newOrder
        });
    };

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{autentification.displayName}</OrderTitle>
                <Header>Подтвердите заказ</Header>
                <Total>
                    <span>Итого</span>
                    <TotalOrderPrice>
                        {formatCurrency(total)}
                    </TotalOrderPrice>
                </Total>
                <ButtonCheckout
                    onClick={() => {
                        sendOrder(dataBase, orders, autentification);
                        setOrders([]);
                        setOpenOrderConfirm(false);
                    }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )
}