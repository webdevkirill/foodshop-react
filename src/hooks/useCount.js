import { useState } from 'react';

export const useCount = (startCount) => {
    const [count, setCount] = useState(startCount || 1);
    const onChangeCount = (e) => setCount(e.target.value >= 1 ? e.target.value <= 100 ? e.target.value : 100 : 1);
    return {count, setCount, onChangeCount}
}