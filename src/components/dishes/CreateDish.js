import React, { Component } from 'react';
import {addDish}  from '../../store/actions/dishActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class CreateDish extends Component {
    state = { 
        name: '',
        protein:0,
        carbs:0,
        fats:0
     }
    
    handleChange = (e) =>{
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state  );
        
        this.setState({calories: Number(this.state.carbs) + Number( this.state.fats)+ Number(this.state.protein)})
        console.log(this.state  );
        this.props.addDish(this.state)
        this.props.history.push('/');
    }
     calculateCalories =()=>{
        // const {state} = this.state;
        // const calories = state.carbs ;
        return Number(this.state.carbs) + Number( this.state.fats)+ Number(this.state.protein);
    }
    render() { 
        const {auth} = this.props;
        
        if(!auth.uid) return <Redirect to ='/signin'/>
        return ( 
            <div className= "container">
                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className = "grey-text text-darken-3">
                        Add New Dish
                    </h5>
                    <div className ="input-field">
                        <label htmlFor="name" >Dish Name</label>
                        <input type = "text" id="name" onChange= {this.handleChange}/>
                    </div>
                    <div className ="input-field">
                        <label htmlFor="protein" >Protein</label>
                        <input type = "number" id="protein" onChange= {this.handleChange}/>
                    </div>
                    <div className ="input-field">
                        <label htmlFor="carbs" >Carbs</label>
                        <input type = "number" id="carbs" onChange= {this.handleChange}/>
                    </div>
                    <div className ="input-field">
                        <label htmlFor="fats" >Fats</label>
                        <input type = "number" id="fats" onChange= {this.handleChange}/>
                    </div>
                        <div>Calories {this.calculateCalories()}</div>
                    
                    <div className ="input-field">
                        <button className = "btn pink lighten-1 z-depth-0">
                            Add 
                        </button>
                    </div>
                </form>

            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        addDish: (dish) => dispatch(addDish(dish))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CreateDish);