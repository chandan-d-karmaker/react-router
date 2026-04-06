import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {

    const userDetails = useLoaderData();

    const neviage = useNavigate();

    return (
        <div>
            <h2>User details here</h2>
            <div className='user-card'>

                <p>Name: {userDetails.name}</p>
                <p>email: {userDetails.email}</p>
                <p>phone: {userDetails.phone}</p>
                <p>Address: {userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city}</p>
                <button onClick={()=> neviage(-1)}>Go back</button>
            </div>
        </div>
    );
};

export default UserDetails;