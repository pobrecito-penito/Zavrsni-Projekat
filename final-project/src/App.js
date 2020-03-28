import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Register from './public/components/Register';
import Login from './public/components/Login';
import Home from './private/Home';
import './App.css'

function App() {
  return (<>
  <p>Hello</p>
    <Router>
      <Link to="/register">Join us!</Link>
      <Link to="/login">Log in!</Link>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
