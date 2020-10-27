import React, { useContext } from 'react';
import { Item, ListItemStyled } from './ListItemStyles';
import { formatCurrency } from '../../../utils/utils';
import { Context } from '../../../context/context';

export const ListItem = ({itemList}) => {
    
    const {setOpenItem} = useContext(Context);

    return (
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
}