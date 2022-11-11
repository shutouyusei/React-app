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
    const view = todo.map((text, index) =>
        <div className='index' key={index}>
            <Index className="App" Text={text} />
        </div>
    )
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