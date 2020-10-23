import { useState } from 'react';

const getToppings = (toppings) => {
    if (toppings) {
        return (
            toppings.map(topping => ({
                name: topping,
                checked: false
            }))
        )  
    } else {
        return null
    }
}
    
export const useToppings = (openItem) => {
    const [toppings, setToppings] = useState(getToppings(openItem.toppings));
    const checkToppings = i => {
        setToppings([...toppings].map((topping, index) => {
            if (i === index) {
                topping.checked =! topping.checked;
            }
            return topping
        }))
    }
    return {toppings, checkToppings}
}