import React, { useContext } from 'react';
import { Banner } from './Banner/Banner';
import { ListItem } from './ListItem/ListItem';
import { MenuStyled, SectionMenu } from './MenuStyles';
import { useFetch } from '../../hooks/useFetch';
import { Context } from '../../context/context';

export const Menu = () => {

    const res = useFetch();
    const dbMenu = res.response;
    const error = res.error;

    const {setOpenItem} = useContext(Context);
    
    return (
        <MenuStyled>
            <Banner />
            {dbMenu ? 
            <div>
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
            </div> : error ? 
            <div>Что-то пошло не так :(</div> :
            <div>Загрузка...</div>
            }
        </MenuStyled>
    )
}