import React, { useState } from 'react';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/ModalItem/ModalItem';
import { NavBar } from './components/NavBar/NavBar';
import { GlobalStyle } from './GlobalStyle';

function App() {

    const [openItem, setOpenItem] = useState(null);

    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Menu setOpenItem={setOpenItem} />
            {openItem && <ModalItem openItem={openItem} setOpenItem={setOpenItem} />}
        </>
    );
}

export default App;
