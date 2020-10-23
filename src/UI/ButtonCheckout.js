import styled from 'styled-components';

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
    border-width: 1px;
    border-style: solid;
    &:hover {
        color: #299B01;
        background-color: #fff;
        border-color: #299B01;
    }
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #ccc;
    }
`;