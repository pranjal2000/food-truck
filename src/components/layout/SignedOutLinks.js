import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';

const SingedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to = '/signup'>Signup</NavLink></li>
            <li><NavLink to = '/signin'>Login</NavLink></li>
        </ul>
    )
}
export default  SingedOutLinks;