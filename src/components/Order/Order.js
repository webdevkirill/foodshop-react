import React, { useContext } from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency } from '../../utils/utils';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { EmptyList, OrderContent, OrderList, OrderStyled } from './OrderStyles';
import { OrderTitle, Total, TotalOrderPrice } from '../../UI/Order/Order';
import { Context } from '../../context/context';

export const Order = () => {

    const {orders, 
        setOrders, 
        autentification, 
        logIn, 
        setOpenOrderConfirm
    } = useContext(Context);

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
                            deleteItem={deleteItem} />
                        )
                    }
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>
                }
            </OrderContent>
            {
                orders.length > 0 &&
                <>
                    <Total>
                        <span>Итого</span>
                        <span>{totalOrderCount}</span>
                        <TotalOrderPrice>{formatCurrency(totalOrderPrice)}</TotalOrderPrice>
                    </Total>
                    <ButtonCheckout onClick={() => {
                        if (autentification) {
                            setOpenOrderConfirm(true);
                        }  else {
                            logIn();
                        }
                    }}>Оформить</ButtonCheckout>
                </>
            }
        </OrderStyled>
    )
}