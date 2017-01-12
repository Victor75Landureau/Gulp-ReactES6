import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
                 <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <a className="navbar-brand" href="#">ReactApp</a>
                        </div>
                        <ul className="nav navbar-nav">
                          <li className="active"><Link to="/">Home</Link></li>
                           <li><Link to="/page1">Page1</Link></li>
                           <li><Link to="/page2">Page2</Link></li>
                           <li><Link to="/login">Login</Link></li>
                        </ul>
                      </div>
                    </nav>
                </header>
        );
    }
}