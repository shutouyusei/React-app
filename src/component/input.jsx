import { React, useState } from "react";
const T = [];
const Input = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const to_index = () => {
        console.log({ text });
        T.push({ text });
        setTodo(...T, { text });
        console.log("T", T);
        console.log({ todo });
        setText('');
    }
    const to = () => {
        console.log({ todo });
    }
    return (
        <div>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}></input>
            <input type='button' onClick={to_index}></input>
            <input type='button' onClick={to}></input>

        </div >
    )
}
export default Input;