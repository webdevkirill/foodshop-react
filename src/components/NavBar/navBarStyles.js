import styled from 'styled-components';

export const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 100%;
    padding: 0.75rem;
    background-color: #299B01;
    color: #fff;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 1.2rem;
`;

export const LogoImg = styled.img`
    margin-right: 0.75rem;
    width: 2.5rem;
`;

export const Login = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: #fff;
    font-size: 0.8rem;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const Logout = styled.span`
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-right: 1.5rem;
`;

export const Figure = styled.figure`
    margin: 0 1.5rem;
`;
