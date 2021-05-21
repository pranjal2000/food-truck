import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import DishDetails from './components/dishes/DishDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateDish from './components/dishes/CreateDish';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/ >
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/dish/:name' component={DishDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/adddish' component={CreateDish}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
