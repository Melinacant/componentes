import React from 'react';
import './Header.css';
import img from './logo-sustenta.png';

const Header = (props) => {
    return (
        <div className="Header">
            <h1>{props.title}</h1>
            <img src={img} alt="logo sustenta" width="200px" />
        </div>
    )
}

export default Header
