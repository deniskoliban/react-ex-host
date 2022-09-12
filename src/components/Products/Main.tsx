import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export interface IProductsProps {

}

const Main: FC<IProductsProps> = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1 style={{cursor: 'pointer'}} onClick={() => navigate('/')}>MAIN PAGE</h1>
                <div>
                    <Button onClick={() => navigate('/layout')}>Nav to layout</Button>
                    <Button onClick={() => navigate('/layout/55')}>Nav to layout with number</Button>
                </div>
                <div>
                    <Button onClick={() => navigate('/welcome')}>Nav to welcome</Button>
                    <Button onClick={() => navigate('/welcome/55')}>Nav to welcome with number</Button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Main
