import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import SignedInLinks from './SignedInLinks'
const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className = "nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Food Truck</Link>
                {links}
            </div>            

        </nav>
    )
}
const mapStateToProps=(state)=>{
    console.log(state);
    return{
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps) (Navbar);