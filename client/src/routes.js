import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import HomeView from './home'
import {Switch, Route, Redirect} from 'react-router-dom';


const Routes = () => (
    <div>
        <Switch>
            <Route name="home" exact path='/' component={HomeView} />
            <Route name="create-event" exact path='/event' component={MainApp} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;
