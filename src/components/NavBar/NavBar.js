import React from 'react';
import { H1, Login, Logo, LogoImg, NavBarStyled } from './NavBarStyles';
import logoImg from '../../img/logo.svg';
import signImg from '../../img/sign.svg';

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <LogoImg src={logoImg} alt="Логотип" />
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <img src={signImg} alt="Вход" />
            <p>войти</p>
        </Login>
    </NavBarStyled>
)