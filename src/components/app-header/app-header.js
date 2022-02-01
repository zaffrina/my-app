import React from 'react';
import './app-header.css';

const AppHeader = () => {
 let a = 4,
 b=5;
    return (
        <div className='app-header d-flex'>
            <h1> Hello</h1>
            <h2> {a+b} записей, понравилось 0</h2>
        </div>
    )
}
 export default AppHeader;