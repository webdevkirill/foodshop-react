import React from 'react';
import { Item } from './ListItemStyles';

export const ListItem = ({itemList}) => (
    <ul>
        {itemList.map(item => (
            <Item key={item.id}>
                {item.name}
            </Item>
        ))}
    </ul>
)