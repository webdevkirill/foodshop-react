import styled from 'styled-components';

export const ModalItemStyled = styled.div`
    background-color: #fff;
    width: 30rem;
    height: 30rem;
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

export const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;