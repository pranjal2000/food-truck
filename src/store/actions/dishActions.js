export const addDish = (dish) => {
     return (dispatch, getState, {getFirebase, getFirestore}) => {
         //make async call to database here and then dispatchs
         const firestore = getFirestore();
         const profile = getState().firebase.profile;
         const authorId = getState().firebase.auth.uid;
         firestore.collection('dishes').add({
             ...dish, 
             authorFirstName: profile.firstName,
             authorLastName: profile.lastName,
             
             authorId : authorId,
             createdAt: new Date()
         }).then(()=> {
            dispatch({type: 'ADD_DISH_SUCCESS', dish: dish});
         }).catch((err)=>{
            dispatch({type: 'ADD_DISH_ERR', err});
         })
         
     }
    
        // dish["authorFirstName"]='baymax'
        // dish["authorLastName"]= 'burrr'
        // dish["authorId"] = 12362
        // dish["createdAt"]= new Date()
    
    
    
    // console.log(dish);
    // return {type: 'ADD_DISH', dish: dish};
    
};
export const deleteDish=(dish)=>{
    return( dispatch, getState,  {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
         console.log(dish, "hi");
         firestore.collection("dishes").doc(dish.id).delete().then(() => {
            dispatch({type: 'REMOVE_DISH_SUCCESS'});
        }).catch((error) => {
            dispatch({type: 'REMOVE_DISH_FAILURE', error});
        });
    }
}