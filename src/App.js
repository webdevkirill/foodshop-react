import React, { useState } from 'react';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/ModalItem/ModalItem';
import { NavBar } from './components/NavBar/NavBar';
import { Order } from './components/Order/Order';
import { GlobalStyle } from './GlobalStyle';

function App() {

    const [openItem, setOpenItem] = useState(null);

    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Order/>
            <Menu setOpenItem={setOpenItem} />
            {openItem && <ModalItem openItem={openItem} setOpenItem={setOpenItem} />}
        </>
    );
}

export default App;
