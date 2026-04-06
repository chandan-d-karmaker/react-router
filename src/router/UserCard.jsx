import React from 'react';
import { Link, useNavigate } from 'react-router';
import UserDetails from './UserDetails';

const UserCard = ({user}) => {

    const nevigate = useNavigate();

    const handleDetails = ()=>{
        nevigate(`/user2/${user.id}`);
    }
    return (
        <div className='user-card'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* <Link to={`/user2/${user.id}`}>Show Details</Link> */}
            <button onClick={handleDetails}>Show details</button>
        </div>
    );
};

export default UserCard;