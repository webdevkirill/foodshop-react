import React from 'react';
import { useCount } from '../../hooks/useCount';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency } from '../../utils/utils';
import { CountItem } from './CountItem/CountItem';
import { Banner, HeaderContent, ModalContent, ModalItemStyled, Overlay, TotalPriceItem } from './ModalItemStyles';
import { Toppings } from './Toppings/Toppings';
import { useToppings } from '../../hooks/useToppings';

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount();

    const {toppings, checkToppings} = useToppings(openItem);
    
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        toppings
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <ModalItemStyled>
                <Banner img={openItem.img} />
                <ModalContent>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem {...counter} />
                    {openItem.toppings && 
                    <Toppings toppings={toppings} checkToppings={checkToppings} />}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </ModalContent>
            </ModalItemStyled>
        </Overlay>
    );
}