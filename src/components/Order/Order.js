import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../../utils/utils';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { EmptyList, OrderContent, OrderList, OrderStyled, OrderTitle, Total, TotalOrderPrice } from './OrderStyles';

export const Order = ({
    orders, setOrders, setOpenItem, 
    autentification, logIn, firebaseDatabase
}) => {

    const dataBase = firebaseDatabase();
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
    }
    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            clientName: autentification.displayName,
            email: autentification.email,
            order: newOrder
        });
        setOrders([]);
    };

    let totalOrderCount = 0; 
    let totalOrderPrice = 0;

    orders.forEach((item) => {
        totalOrderCount += item.count;
        totalOrderPrice += totalPriceItems(item);
    })

    const deleteItem = (index) => {
        const newOrder = [...orders].filter((item, idx) => idx !== index);
        setOrders(newOrder);
    }

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length > 0 ?
                <OrderList>
                    {
                        orders.map((order, index) => <OrderListItem 
                            key={order.name + index}
                            order={order}
                            index={index}
                            deleteItem={deleteItem}
                            setOpenItem={setOpenItem} />)
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
            <ButtonCheckout onClick={() => {
                if (autentification) {
                    sendOrder();
                }  else {
                    logIn();
                }
            }}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}