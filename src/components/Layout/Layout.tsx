import React, { FC } from 'react';
import classes from './Layout.module.css'
import { Outlet } from 'react-router-dom';

export type LayoutProps = {}

const Layout: FC<LayoutProps> = () => {
    return (
        <div className={classes.Layout}>
            <Outlet/>
        </div>
    );
}

export default Layout;
