import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import SideNav from './sideNav';

const Root = () => {
    return (
        <div>
            <Header/>
            <div className='main-screen'>
                <SideNav/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;