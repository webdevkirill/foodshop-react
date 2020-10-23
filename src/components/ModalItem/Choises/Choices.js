import React from 'react';
import { ModalWrap } from '../../../UI/Modal/ModalWrap';
import { ModalLabel } from '../../../UI/Modal/ModalLabel';
import { ModalCheckbox } from '../../../UI/Modal/ModalCheckbox';

export const Choices = ({choice, changeChoices, openItem}) => {

    return (
        <>
            <h3>Выбирайте: </h3>
            <ModalWrap>
                {openItem.choices.map((item, index) => (
                    <ModalLabel key={index}>
                        <ModalCheckbox 
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ModalLabel>
                ))}
                
            </ModalWrap>
        </>
    )
}