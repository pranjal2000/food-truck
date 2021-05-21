import authReducer from './authReducer';
import dishReducer from './dishReducer';
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
     auth: authReducer,
     dish: dishReducer,
     firestore: firestoreReducer,
     firebase: firebaseReducer
});

export default rootReducer;