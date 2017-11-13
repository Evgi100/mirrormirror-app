import React from 'react';
import ReactDom from 'react-dom';
import Header from './common/Header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar.js';
import Sidebar from './sidebar'

class AppWrapper extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <Sidebar />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            </div>
        );
    }
}

ReactDom.render(
    <AppWrapper />, document.getElementById('react-app'));

