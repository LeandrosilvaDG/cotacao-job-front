import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from '../auth/auth';

import Home from '../../pages/home';
import Questions from '../../pages/questions';
import Login from '../../pages/login';
import Admin from '../../pages/admin';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render = { props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            )
        }
    />
);


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/questions" component={Questions} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={Admin} />
        </Switch>
    )
}

export default Routes;
