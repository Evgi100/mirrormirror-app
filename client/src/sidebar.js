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
                                        <i className="fa fa-caret-right"></i>Party</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Concert</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Clubbing</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Wedding</a>
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
                                        <i className="fa fa-caret-right"></i>Male</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Female</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-4">
                                <span className="sidebar-title">Age</span>
                                <b className="caret"></b>
                            </a>
                            <ul id="submenu-4" className="panel-collapse collapse panel-switch" role="menu">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>13 - 20</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>21 - 30</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>31 - 40</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>41 - 50</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>51 - 60</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>61 - 70</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>71+</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-5">
                                <span className="sidebar-title">City</span>
                                <b className="caret"></b>
                            </a>
                            <ul id="submenu-5" className="panel-collapse collapse panel-switch" role="menu">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>New York</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>London</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Rome</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Paris</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Berlin</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Stockholm</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-caret-right"></i>Tel Aviv</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default Sidebar;