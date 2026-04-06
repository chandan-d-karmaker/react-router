import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import SideNav from './sideNav';

const Root = () => {

    const nevigation = useNavigation();

    const isNavigating = Boolean(nevigation.location);
    return (
        <div>
            <Header/>
            <div className='main-screen'>
                <SideNav/>
                {isNavigating && <h1>Loading......................</h1>}
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;