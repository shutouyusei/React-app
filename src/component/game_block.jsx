// ブロック

const block = (props) => {
    const item = [];
    for (let i = 0; i < 20; i++) {
        item.push(<div className="block" key={i}>{props.text}</div>);
    }
    return (<div className="game_field">{item}</div>)
}

export default block;