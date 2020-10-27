import React from 'react';
import { Banner } from './Banner/Banner';
import { ListItem } from './ListItem/ListItem';
import { MenuStyled, SectionMenu } from './MenuStyles';
import { useFetch } from '../../hooks/useFetch';

export const Menu = () => {

    const res = useFetch();
    const dbMenu = res.response;
    const error = res.error;
    
    return (
        <MenuStyled>
            <Banner />
            {dbMenu ? 
            <div>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem  itemList={dbMenu.burger} />
                </SectionMenu>

                <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem itemList={dbMenu.other} />
                </SectionMenu>
            </div> : error ? 
            <div>Что-то пошло не так :(</div> :
            <div>Загрузка...</div>
            }
        </MenuStyled>
    )
}