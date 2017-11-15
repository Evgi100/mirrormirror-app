import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

    return (

        <div id="navbar-wrapper">
            <header>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Mirror Mirror</Link>
                        </div>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/event">Create event
                                    <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">Browse
                                    <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a id="user-profile" href="#" className="dropdown-toggle" data-toggle="dropdown" style={{color:'#f00454'}}>
                                        <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnail img-circle" />Valentino</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">&nbsp;</a>
                                </li>

                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;