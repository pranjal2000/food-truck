const initState = {
    dishes:[
        {
        name: 'kaddu',
        protein:'11',
        carbs:'111',
        fats:'1111'},
        
        {name: 'bhindi',
        protein:'22',
        carbs:'222',
        fats:'2222'},
        {name: 'tinda',
        protein:'33',
        carbs:'333',
        fats:'3333'}
        
    ]
};
const dishReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_DISH_SUCCESS':
            console.log('created dish', action.dish);
            return {
                ...state,
                dishes : [...state.dishes , action.dish]
            }
        case 'ADD_DISH_ERR':
            console.log('created dish error', action.err);
            return state;
        case 'REMOVE_DISH_SUCCESS':
            return state;
        case 'REMOVE_DISH_ERROR':
            return state;
        default:
            return state;
    } 
}
export default dishReducer;