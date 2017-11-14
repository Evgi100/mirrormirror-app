import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import HomeView from './home';
import RateBox from './rateBox'
import {Switch, Route, Redirect} from 'react-router-dom';


const Routes = () => (
    <div>
        <Switch>
            <Route name="home" exact path='/' component={HomeView} />
            <Route name="create-event" exact path='/event' component={MainApp} />
            <Route name="rate" exact path='/rate' component={RateBox} />
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
