import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from './public/components/Register';
import Login from './public/components/Login';
import './App.css'
import PrivateRoute from './private/PrivateRoutes';
import PublicRoute from './public/PublicRoute';
import WelcomePage from './public/components/WelcomePage';
import Profile from './private/components/Home/Profile'
import Home from './private/components/Home/Home';
import YouChoose from './private/containers/YouChoose';
import WeChoose from './private/containers/WeChoose';
import More from './private/containers/More';
import ConvertText from './private/containers/ConvertText';
import Favorites from './private/components/Home/Favorites';
import History from './private/components/Home/History';

function App() {

  return (<>
    <Router>
      <Switch>
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={YouChoose} path="/youchoose" />
        <PrivateRoute component={WeChoose} path="/wechoose" />
        <PrivateRoute component={More} path="/morefacts" />
        <PrivateRoute component={ConvertText} path="/converter" />
        <PrivateRoute component={Favorites} path="/favorites" />
        <PrivateRoute component={History} path="/history" />
        <PublicRoute component={Register} path="/register" />
        <PublicRoute component={Login} path="/login" />
        <PublicRoute component={WelcomePage} path="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
