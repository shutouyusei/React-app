import { React, useState } from "react";

const Input = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const to = () => {
        onsole.log(text),
            setTodo([...todo, text]),
            setText('');
    }
    return (
        <div>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
            <input type='button' onClick={to}></input>
        </div >
    )
}
export default Input;