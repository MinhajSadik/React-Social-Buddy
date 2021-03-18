import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Commnet from '../../Comment/Commnet';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([])
    useEffect(() =>{
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [id])
    return (
        <div>
            <h2>{id}</h2>
            <h3>User Post:{post.id}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Body: {post.body}</h5>
            <p>Commnet: {comments.length} </p>
            {
                comments.map(comment => <Commnet key={comment.id} comment={comment}></Commnet>)
            }
        </div>
    );
};

export default PostDetail;