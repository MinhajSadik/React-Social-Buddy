import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'http://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>THis is My Post {posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;