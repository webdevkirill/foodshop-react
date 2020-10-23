import React from 'react';
import { ModalLabel } from '../../../UI/Modal/ModalLabel';
import { ModalCheckbox } from '../../../UI/Modal/ModalCheckbox';
import { ModalWrap } from '../../../UI/Modal/ModalWrap';

export const Toppings = ({toppings, checkToppings}) => {

    return (
        <>
            <h3>Добавки</h3>
            <ModalWrap>
                {toppings.map((topping, index) => (
                    <ModalLabel key={index}>
                        <ModalCheckbox 
                            type="checkbox"
                            checked={topping.checked}
                            onChange={() => checkToppings(index)}
                        />
                        {topping.name}
                    </ModalLabel>
                ))}
                
            </ModalWrap>
        </>
    )
}