import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';
// import '../css/index.css';
import { Home } from './containers/Home'
import { Login } from './containers/Login'
import { Signup } from './containers/Signup'
import { Profile } from './containers/Profile'
import { User } from './containers/User'
import 'bootstrap/dist/css/bootstrap.css';
import './../css/Navigation.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/profile' component={Profile} />
        <Route path='/users/:uuid' component={User} />
    </Router>,
    document.getElementById('root')
);
