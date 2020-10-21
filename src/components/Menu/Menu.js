import React from 'react';
import dbMenu from '../../DBMenu';
import { ListItem } from './ListItem/ListItem';
import { MenuStyled, SectionMenu } from './MenuStyles';

export const Menu = () => (
    <MenuStyled>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
)