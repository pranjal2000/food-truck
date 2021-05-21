import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector  } from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance , getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  // compose( 
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  // reduxFirestore(firebase),
  // reactReduxFirebase(firebase,fbConfig)
  // )
);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}
 const rrfProps = {
     firebase,
     config: rrfConfig, fbConfig,
     dispatch: store.dispatch,
     createFirestoreInstance // <- needed if using firestore
}
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center">Loading Screen...</div>;
      return children
}
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
   <AuthIsLoaded><App /> </AuthIsLoaded>
   </ReactReduxFirebaseProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
