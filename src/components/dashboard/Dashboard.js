import React, { Component } from 'react';
import Notifications from './Notifications';
import DishList from '../dishes/DishList';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Dashboard extends Component {
    // state = {  }
    render() { 
        const { dishes, auth } = this.props;
        if(!auth.uid) return <Redirect to ='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    {/* lsit of dishes */}
                    <div className="col s12 m6">
                        <DishList dishes = { dishes }/>
                    </div>
                    {/* recent dishes or notifications */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
          );
    }
}
const mapStateToProps = (state) =>{
    return {
        dishes: state.firestore.ordered.dishes,
        auth : state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(()=>[
        {
            collection : 'dishes'
        }
    ])
  )(Dashboard)