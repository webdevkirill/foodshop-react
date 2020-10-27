import React, {useContext} from 'react';
import { Figure, H1, Login, Logo, LogoImg, NavBarStyled, User, Logout } from './NavBarStyles';
import logoImg from '../../img/logo.svg';
import signImg from '../../img/sign.svg';
import { Context } from '../../context/context';

export const NavBar = () => {

    const {autentification, logIn, logOut} = useContext(Context);

    return (
        <NavBarStyled>
            <Logo>
                <LogoImg src={logoImg} alt="Логотип" />
                <H1>MrDonald's</H1>
            </Logo>
            {autentification ? 
            <User>
                <Figure>
                    <img src={signImg} alt={autentification.displayName} />
                    <figcaption>{autentification.displayName}</figcaption>
                </Figure>
                <Logout title="Выйти" onClick={logOut}>x</Logout>
            </User> :
            <Login onClick={logIn} >
                <Figure>
                    <img src={signImg} alt="Вход" />
                    <figcaption>войти</figcaption>
                </Figure>
            </Login> 
            }
        </NavBarStyled>
    )
}