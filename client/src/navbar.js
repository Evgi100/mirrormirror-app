import React from 'react';

const Navbar = (props) => {

    return (
        <div id="navbar-wrapper">
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Mirror Mirror</a>
                    </div>
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                        <form className="bs-example bs-example-form" role="form">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>

                        <form className="navbar-form navbar-left" role="search">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a id="user-profile" href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="http://lorempixel.com/100/100/people/9/" className="img-responsive img-thumbnail img-circle" /> Username</a>
                                    <ul className="dropdown-menu dropdown-block" role="menu">
                                        <li>
                                            <a href="#">Edit Profile</a>
                                        </li>
                                        <li>
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;