import React, { useContext } from 'react';
import { useCount } from '../../hooks/useCount';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { totalPriceItems, formatCurrency } from '../../utils/utils';
import { CountItem } from './CountItem/CountItem';
import { Banner, HeaderContent, ModalContent, ModalItemStyled, TotalPriceItem } from './ModalItemStyles';
import { Toppings } from './Toppings/Toppings';
import { useToppings } from '../../hooks/useToppings';
import { useChoices } from '../../hooks/useChoices';
import { Choices } from './Choises/Choices';
import { Overlay } from '../../UI/Modal/Overlay';
import { Context } from '../../context/context';

export const ModalItem = () => {

    const {openItem, setOpenItem, orders, setOrders} = useContext(Context);
    
    const counter = useCount(openItem.count);
    const {toppings, checkToppings} = useToppings(openItem);
    const {choice, changeChoices} = useChoices(openItem);
    const isEdit = openItem.index > -1;
    
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings,
        choice: choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
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
                    {openItem.choices && 
                    <Choices 
                        choice={choice} 
                        changeChoices={changeChoices} 
                        openItem={openItem} />}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout 
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}
                        >{isEdit ? 'Редактировать' : 'Добавить'}
                    </ButtonCheckout>
                </ModalContent>
            </ModalItemStyled>
        </Overlay>
    );
}