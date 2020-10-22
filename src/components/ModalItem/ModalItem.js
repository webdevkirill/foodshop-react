import React from 'react';
import { ButtonCheckout } from '../../UI/ButtonCheckout';
import { Banner, HeaderContent, ModalContent, ModalItemStyled, Overlay } from './ModalItemStyles';

export const ModalItem = ({openItem, setOpenItem}) => {

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null)
        }
    }

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <ModalItemStyled>
                <Banner img={openItem.img} />
                <ModalContent>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price}</div>
                    </HeaderContent>
                    <ButtonCheckout>
                        Добавить
                    </ButtonCheckout>
                </ModalContent>
            </ModalItemStyled>
        </Overlay>
    );
}