import { React, useState } from "react";
import { Index } from './index';

const Header = () => {
    // todoの配列
    const [todo, setTodo] = useState([]);
    // 入力情報
    const [text, setText] = useState("");
    // 入力内容を配列へ
    const to = () => {
        console.log(text);
        setTodo([...todo, text]);
        setText('');
    }
    // todolistをmapで表示
    const view = todo.map((text, index) =>
        <div className='index' key={index}>
            <Index className="App" Text={text} />
        </div>
    )
    // mainpage
    return (
        <div className="App">
            <h1>TO Do App</h1>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
            <input type='button' onClick={to}></input>
            <ul className="App" >{view}</ul>
        </div>
    )
}
export default Header;