import React from 'react';

const Post = ({post}) => {
    return (
        <div className='user-card'>
            <p>Title: {post.title} </p>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default Post;