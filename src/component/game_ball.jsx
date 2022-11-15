// ボール
import { useEffect, useState } from 'react';
let xbool = true;
let ybool = true;
const ball = () => {
    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const render = () => {
        // x要素の動きの演算
        console.log(x);
        if (xbool) {
            setX((prevCountx) => prevCountx + 1);
            if (x > 99) {
                xbool = !xbool;
            }
        } else {
            setX((prevCountx) => prevCountx - 1);
            if (x < 1) {
                xbool = !xbool;
            }
        }
        // y要素の動き演算
        if (ybool) {
            setY((prevCounty) => prevCounty + 1);
            if (y > 99) {
                ybool = !ybool;
            }
        } else {
            setY((prevCounty) => prevCounty - 1);
            if (y < 1) {
                ybool = !ybool;
            }
        }
    };
    // レンダリング後100msで実行
    useEffect(() => {
        setTimeout(() => {
            render();
        }, 100);
    }, [x]);
    // レンダリング
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