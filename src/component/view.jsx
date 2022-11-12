import { useState } from "react";
import { Game } from "./index";

const Index = (props) => {
    const [bool, setBool] = useState(true);
    if (bool) {
        return (
            <li className="todolist" >
                <div className="list" onClick={() => setBool(prevState => !prevState)}>
                    <div>{props.Text}</div>
                </div>
            </li >
        )
    } else {
        return (<>
            <li className="todolist" >
                <div className="list" onClick={() => setBool(prevState => !prevState)}>
                    <div>{props.Text}</div>
                </div>
            </li >
            <Game Text={props.Text} />
        </>
        )
    };
}

export default Index;