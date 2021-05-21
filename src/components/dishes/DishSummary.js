import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import { deleteDish } from '../../store/actions/dishActions';
//  const handleClick =(e)=>{
//     const {dish} = props;
//     this.props.deleteDish(dish);
// }
const DishSummary = (props) => {
    const {dish} = props;
    const { auth } = props;
    
    console.log(auth, 'here')
    // if(!auth.uid) return <Redirect to ='/signin'/>
    return (
        <div>
        <div className="card z-depth-0 project-summary">
            {/* {
                    auth.uid === "6vAxvALrTaOt7znHZCXUF0PtldI2" ? <button onClick = {()=>{
                        deleteDish(dish)
                    }} className="btn pink lighten-1 z-depth-0">
                    Delete
                </button>:null
                } */}
            <div className="card-content grey-text text-darken-3">
                <Link to={"/dish/" + dish.id}><span className="card-title">{dish.name}</span></Link> 
                <p>Added by {dish.authorFirstName} {dish.authorLastName}</p>
                <p className = "grey-text">{moment(dish.createdAt.toDate()).calendar()}</p>
                {/* { auth. } */}   
                {
            auth.uid === "6vAxvALrTaOt7znHZCXUF0PtldI2" ? <button onclick = {()=>{
            
            }} className="btn pink lighten-1 z-depth-0">
            Delete
        </button>:null
        }             
            </div>
            
        </div>
        
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        auth : state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteDish: (dish)=> dispatch(deleteDish(dish))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishSummary);