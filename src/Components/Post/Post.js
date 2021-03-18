import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title} = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1>Number of Post: {id}</h1>
            <h2>Title of Post: {title}</h2>
            <br/>
            <button onClick={() => showComments(id)}>Show Detail</button>
        </div>
    );
};

export default Post;