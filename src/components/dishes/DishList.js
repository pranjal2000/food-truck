import React, { Component } from 'react';
import DishSummary from './DishSummary';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const DishList = ({dishes}, props) => {
    // const { auth } = props;
    // if(!auth.uid) return <Redirect to ='/signin'/>
    return(
        <div className="project-list section">
            { dishes && dishes.map(dish =>{
                return (
                    <Link to={'/dish/' + dish.id} key={dish.id}>
                        <DishSummary dish={dish} />
                    </Link>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }

}
export default connect(mapStateToProps)(DishList);