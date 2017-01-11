import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <nav className="navbar navbar-inverse">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                          <li className="active"><Link to="/">Home</Link></li>
                           <li><Link to="/header">Header</Link></li>
                           <li><Link to="/about">About</Link></li>
                        </ul>
                      </div>
                    </nav>
                </header>
            </div>
        );
    }
}

