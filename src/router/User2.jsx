import React, { use } from 'react';
import UserCard from './UserCard';

const User2 = ({userPromise}) => {

    const userData2 = use(userPromise);
    console.log("user2 suspense data", userData2);
    return (
        <div>
            <h3>This is users 2 section</h3>
            <div className='user-container'>
                {
                    userData2.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default User2;