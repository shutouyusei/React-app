import { useState } from "react";

const game = (props) => {
    const [bool, setBool] = useState(true);
    if (bool) {
        return (<>
            <div className="field">
                <div className="gameexit_button" onClick={() => setBool(prevstate => !prevstate)}>X</div>
                {/* game画面*/}<div>{props.Text}</div>
            </div>
        </>);
    } else {
        <></>
    }
}

export default game;