import { useState } from 'react';

const getToppings = (toppings) => toppings.map(topping => ({
    name: topping,
    checked: false
}));
    
export const useToppings = (openItem) => {
    const readyToppings = openItem.topping ? 
        openItem.topping : 
        openItem.toppings ? 
        getToppings(openItem.toppings) : 
        [];
    const [toppings, setToppings] = useState(readyToppings);
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