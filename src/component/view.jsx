import { useState } from "react";
const Index = (props) => {
    const [bool, setBool] = useState(true);
    if (bool) {
        return (
            <li className="todolist" >
                <div className="list" onClick={() => setBool(prevState => !prevState)}>
                    {props.Text}
                </div>
            </li >
        )
    } else {
        return (
            <li className="todolist">
                <div className="list-delete" onClick={() => setBool(prevState => !prevState)}>
                    {props.Text}
                </div>
            </li >
        )
    };
}

export default Index;