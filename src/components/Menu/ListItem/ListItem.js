import React from 'react';
import { Item, ListItemStyled } from './ListItemStyles';
import { formatCurrency } from '../../../utils/utils';

export const ListItem = ({itemList, setOpenItem}) => (
    <ListItemStyled>
        {itemList.map(item => (
            <Item 
                key={item.id} 
                img={item.img}
                onClick={() => setOpenItem(item)}
            >
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
            </Item>
        ))}
    </ListItemStyled>
)