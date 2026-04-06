import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobile'>Mobile</NavLink>
                <NavLink to='/laptop'>Laptop</NavLink>
                <NavLink to='/user'>Users</NavLink>
                <NavLink to='/user2'>Users2</NavLink>
                <NavLink to='/posts'>
                    {
                        ({isPending})=> ( 
                            <span>Posts {isPending && <p>loading</p>}</span>
                        )
                    }
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;