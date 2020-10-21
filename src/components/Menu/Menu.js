import React from 'react';
import dbMenu from '../../DBMenu';
import { Banner } from './Banner/Banner';
import { ListItem } from './ListItem/ListItem';
import { MenuStyled, SectionMenu } from './MenuStyles';

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem 
            itemList={dbMenu.other}
            setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)