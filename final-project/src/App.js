import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Register from './public/components/Register';
import Login from './public/components/Login';
import Home from './private/Home';
import './App.css'
import Navigation from './public/components/Navigation';
import Header from './public/components/Header';
import Profile from './private/components/Profile';

function App() {

  return (<>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
