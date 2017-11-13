import React from 'react';

const Sidebar = (props) => {

    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <aside id="sidebar">
                    <ul id="sidemenu" className="sidebar-nav">
                        <li>
                            <a href="#">
                                <span className="sidebar-title">Filter</span>
                            </a>
                        </li>
                        <li>
                            <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
                                <span className="sidebar-title">Occasion</span>
                                <b className="caret"></b>
                            </a>
                            <ul id="submenu-2" className="panel-collapse collapse panel-switch" role="menu">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Users</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Roles</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
                                <span className="sidebar-title">Gender</span>
                                <b className="caret"></b>
                            </a>
                            <ul id="submenu-3" className="panel-collapse collapse panel-switch" role="menu">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Posts</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Comments</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="sidebar-title">Age</span>
                                <b className="caret"></b>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="sidebar-title">Citz</span>
                                <b className="caret"></b>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
            <main id="page-content-wrapper" role="main">
            </main>
        </div>
    );
}

export default Sidebar;