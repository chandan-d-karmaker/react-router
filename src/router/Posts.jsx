import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            
            <div className='user-container'>
                <h3>These are my posts ({posts.length})</h3>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;