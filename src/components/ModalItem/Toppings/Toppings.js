import React from 'react';
import { ToppingsCheckbox, ToppingsLabel, ToppingsWrap } from './ToppingsStyles';

export const Toppings = ({toppings, checkToppings}) => {

    return (
        <>
            <h3>Добавки</h3>
            <ToppingsWrap>
                {toppings.map((topping, index) => (
                    <ToppingsLabel key={index}>
                        <ToppingsCheckbox 
                            type="checkbox"
                            checked={topping.checked}
                            onChange={() => checkToppings(index)}
                        />
                        {topping.name}
                    </ToppingsLabel>
                ))}
                
            </ToppingsWrap>
        </>
    )
}