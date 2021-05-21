import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
const DishDetails =(props)=> {
    // const id = props.match.params.name;
    // console.log(props);
    const { dish, auth }  = props;
    if(!auth.uid) return <Redirect to ='/signin'/>
    console.log(props);
    if(dish){
        return(
            <div className="container section project-details">
        <div className = "card z-depth-0">
            <div className= "card-content">
                <span className="card-title">
                    {dish.name}
                </span>
                <p>Protein: {dish.protein}</p>
                <p>Carbs: {dish.carbs}</p>
                <p>Fats: {dish.fats}</p>
                <h6>calories: {dish.calories}</h6>
            </div>
            <div className ="card-action grey lighten-4 grey-text">
                <div>Posted by {dish.authorFirstName} {dish.authorLastName}</div>
                <div>{moment(dish.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
        
    </div>
        )
        
    }else{
        return (
            <div className="container center">
                <p>Loading dish...</p>
            </div>
            )
    }
    
}
const mapStateToProps = (state, ownProps)=>{
    const id= ownProps.match.params.name;
    console.log(ownProps);
    // console.log(state);
    const dishes = state.firestore.data.dishes;
    // console.log(dishes);
    const dish = dishes ? dishes[id] :null;
    // console.log(dish);
    return {
        dish:dish,
        auth : state.firebase.auth
    }
}
// export default DishDetails;
export default compose(
    connect(mapStateToProps),
    firestoreConnect(()=>[
        {
            collection : 'dishes'
        }
    ])
  )(DishDetails)
