import React from 'react';

const Navbar = (props) => {
   
    return (
        < div >    
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="nav-container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#home">MIRROR ME</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <a >RATE</a>
                    </li>
                    <li>
                        <a >EXPLORE</a>
                    </li>
                    <li>
                        <a >PROFILE</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div >
    );
}

export default Navbar;