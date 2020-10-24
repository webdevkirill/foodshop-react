import React from 'react';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/ModalItem/ModalItem';
import { NavBar } from './components/NavBar/NavBar';
import { Order } from './components/Order/Order';
import { GlobalStyle } from './GlobalStyle';
import { useOpenItem } from './hooks/useOpenItem';
import { useOrders } from './hooks/useOrders';

function App() {

    const {openItem, setOpenItem} = useOpenItem();
    const ordersHook = useOrders();

    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Order {...ordersHook} setOpenItem={setOpenItem} />
            <Menu setOpenItem={setOpenItem} />
            {openItem && 
                <ModalItem openItem={openItem} setOpenItem={setOpenItem} {...ordersHook} />
            }
        </>
    );
}

export default App;
