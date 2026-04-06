import React from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';

const UserCard = ({user}) => {
    return (
        <div className='user-card'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link to={`/user2/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default UserCard;