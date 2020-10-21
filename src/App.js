import React from 'react';
import { Menu } from './components/Menu/Menu';
import { NavBar } from './components/NavBar/NavBar';
import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Menu />
        </>
    );
}

export default App;
