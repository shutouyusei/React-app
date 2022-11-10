import { React, useState } from "react";
import { Index } from './index';

const Header = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const to = () => {
        console.log(text);
        setTodo([...todo, text]);
        setText('');
    }
    return (
        <div>
            <h1>TO Do App</h1>

            <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
            <input type='button' onClick={to}></input>
            <Index Text={todo} />
        </div>
    )
}
export default Header;