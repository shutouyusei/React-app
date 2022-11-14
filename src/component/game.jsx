import { useState } from "react";
import { Block, Ball } from "./index";

const game = (props) => {
    const [bool, setBool] = useState(true);
    if (bool) {
        return (<>
            <div className="background">
            </div>
            <div className="field">
                <div className="gameexit_button" onClick={() => setBool(prevstate => !prevstate)}>X</div>
                {/* game画面*/}<div><Block text={props.Text} /><Ball /></div>
            </div>
        </>);
    } else {
        <></>
    }

}

export default game;