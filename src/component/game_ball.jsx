// ボール
import { useEffect, useState } from 'react';

const ball = () => {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const render = () => {
        console.log(x);
        setX((prevCountx) => prevCountx + 1);
        setY((prevCounty) => prevCounty + 1);
    };
    useEffect(() => {
        setTimeout(() => {
            render();
        }, 100);
    }, [x]);
    return (
        <div className="ball"
            style={{
                position: 'absolute',
                top: y + '%',
                left: x + '%'
            }}>ball</div>
    )
}
export default ball;