import React from 'react';

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
                            <a className="navbar-brand" href="#">Mirror Mirror</a>
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
                                    <a href="#">Create event
                                    <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Browse
                                    <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a id="user-profile" href="#" className="dropdown-toggle" data-toggle="dropdown" style={{color:'#f00454'}}>
                                        <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnail img-circle" />Valentino</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#">Action</a>
                                        </li>
                                        <li>
                                            <a href="#">Another action</a>
                                        </li>
                                        <li>
                                            <a href="#">Something else here</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="#">Separated link</a>
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