import React from 'react';

class App extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Weather App</a>
                    </div>


                    <div className="collapse navbar-collapse" id="navbar-collapse-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li>
                                <a className="btn btn-default pixel-outline pixel-circle" data-toggle="collapse" href="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2">Sign in</a>
                            </li>
                        </ul>
                        <div className="collapse nav navbar-nav nav-collapse" id="nav-collapse2">
                            <form className="navbar-form navbar-right form-inline" role="form">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="Email">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="Email" autoFocus required />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="Password">Password</label>
                                    <input type="password" className="form-control" id="Password" placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn btn-success">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default App;