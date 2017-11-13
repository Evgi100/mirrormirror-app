import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () => (
    <div>
        <Switch>
            <Route name="home" exact path='/' component={MainApp} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;


// <Route name="login" component={} />
// <Route name="register" component={} />
// <Route name="profile" component={} />
// <Route name="event-rate" component={} />
// <Route name="post-register" component={} />
