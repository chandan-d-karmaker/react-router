import React from 'react';

const UserCard = ({user}) => {
    return (
        <div className='user-card'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};

export default UserCard;