import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import HomeView from './home';
import RateBox from './rateBox'
import {Switch, Route, Redirect} from 'react-router-dom';
////

const Routes = () => (
    <div>
        <Switch>
            <Route name="home" exact path='/' component={HomeView} />
            <Route name="create-event" path='/event' component={MainApp} />
            <Route name="rate" path='/rate/:eventID' component={RateBox} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;

// <Route exact path='rate' render={(props) => (
//     <RateBox {...props} pass_to_page_content='hi' />
//   )}/>

// <Route name="login" component={} />
// <Route name="register" component={} />
// <Route name="profile" component={} />
// <Route name="event-rate" component={} />
// <Route name="post-register" component={} />
