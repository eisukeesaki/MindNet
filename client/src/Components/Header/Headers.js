import React from 'react';
import '../Header/Headers.css';
import MenuTab from '../Menu/Menu';
import { Link } from 'react-router-dom';


function Headers() {
    return (
        <div className='contain'>

            <span className='title'>
                <Link to='/' style={{ textDecoration: 'inherit', color: 'White' }} >MindNet
                </Link>
            </span>
            <MenuTab />
        </div>);
}

export default Headers;
