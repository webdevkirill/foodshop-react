import styled from 'styled-components';

export const ModalItemStyled = styled.div`
    background-color: #fff;
    width: 30rem;
    height: 30rem;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
`;

export const Banner = styled.div`
    height: 10rem;
    width: 100%;
    background: #000 url(img/${({img}) => img}) center no-repeat;
    background-size: cover;
`;

export const ModalContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 10rem);
    padding: 1.5rem;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 12.5rem;
    height: 3.25rem;
    font-size: inherit;
    background-color: #299B01;
    border-color: transparent;
    color: #fff;
    transition: all 0.3s;
    &:hover {
        color: #299B01;
        background-color: #fff;
        border-color: #299B01;
    }
`;