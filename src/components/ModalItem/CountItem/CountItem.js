import React from 'react';
import { CountInput, CountWrapper, ButtonCount } from './CountItemStyles';

export const CountItem = ({count, setCount, onChangeCount}) => {

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount 
                    disabled={count <= 1} 
                    onClick={() => setCount(count - 1)}
                    >-
                </ButtonCount>
                <CountInput 
                    type="number" 
                    min="1" 
                    max="100" 
                    value={count} 
                    onChange={onChangeCount} 
                />
                <ButtonCount 
                    disabled={count >= 100} 
                    onClick={() => setCount(count + 1)}
                    >+
                </ButtonCount>
            </div>
        </CountWrapper>
    )
}