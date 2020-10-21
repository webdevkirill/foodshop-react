import React from 'react';
import { Item, ListItemStyled } from './ListItemStyles';

export const ListItem = ({itemList, setOpenItem}) => (
    <ListItemStyled>
        {itemList.map(item => (
            <Item 
                key={item.id} 
                img={item.img}
                onClick={() => setOpenItem(item)}
            >
                <p>{item.name}</p>
                <p>{item.price.toLocaleString(
                    'ru-RU', 
                    {style: 'currency', currency: 'RUB'})}</p>
            </Item>
        ))}
    </ListItemStyled>
)