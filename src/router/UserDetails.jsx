import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const userDetails = useLoaderData();
    return (
        <div>
            <h2>User details here</h2>
            <div className='user-card'>

                <p>Name: {userDetails.name}</p>
                <p>email: {userDetails.email}</p>
                <p>phone: {userDetails.phone}</p>
                <p>Address: {userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city}</p>
            </div>
        </div>
    );
};

export default UserDetails;