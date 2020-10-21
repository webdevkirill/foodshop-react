import styled from 'styled-components';

export const ListItemStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Item = styled.li`
    position: relative;
    z-index: 1;
    width: 20rem;
    height: 7.75rem;
    background: ${({img}) => `url(img/${img})`} center no-repeat;
    background-size: cover;
    margin: 1.5rem 1.5rem 0 0;
    padding: 0.75rem;
    font-size: 1.5rem;
    color: #fff;
    transition: 0.2s;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
        opacity: 0.5;
        z-index: -1;
        transition: 0.2s;
    }
    &:hover {
        cursor: pointer;
        box-shadow: 7px 7px 8px 0px rgba(0,0,0,0.5);
        &:after {
            opacity: 0;
        }
    }
`;