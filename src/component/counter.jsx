import React, { useEffect, useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0)
    const countUp = () => {
        setCount(prevState => prevState + 2)
    }
    const countDown = () => {
        setCount(prevState => prevState - 1)
    }
    useEffect(() => {
        console.log('curent count is ...', count)
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
}
export default Counter;