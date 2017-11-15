import React from 'react';
import ReactDom from 'react-dom';
import Header from './common/Header';
import Routes from './routes';

import rateBox from './rateBox'
import Navbar from './navbar.js';
import Sidebar from './sidebar'
import { HashRouter } from 'react-router-dom';

class AppWrapper extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Sidebar />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

ReactDom.render(
  <AppWrapper />, document.getElementById('react-app'));

