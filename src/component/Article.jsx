import { useState } from 'react';
const Article = (props) => {
    const [isPublish, setState] = useState('');
    const handleName = (event) => {
        setState(event.target.value)
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.article}</p>
            <p>{isPublish}</p>
            <input
                onChange={(event) => handleName(event)}
                type={'text'}
                value={isPublish}
            ></input>
        </div>
    );
};
export default Article;
