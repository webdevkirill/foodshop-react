import { useEffect } from 'react';

export const useModal = (openItem) => {
    useEffect(() => {
        document.title = openItem ? openItem.name : 'FoodShop'
        document.body.style.overflow = openItem ? 'hidden' : '';
    }, [openItem])
}