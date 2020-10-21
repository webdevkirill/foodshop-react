import React from 'react';
import dbMenu from '../../DBMenu';
import { ListItem } from './ListItem/ListItem';
import { MenuStyled } from './MenuStyles';

export const Menu = () => (
    <MenuStyled>
        <section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </section>

        <section>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </section>
    </MenuStyled>
)