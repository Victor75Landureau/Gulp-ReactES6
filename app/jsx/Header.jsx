import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
                 <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                      <div className="container-fluid">
                        <ul className="nav navbar-nav pull-left">
                           <li><img alt="Logo" height="40" width="40" src="app/images/react-logo.png"/></li>
                           <li><a href="#">ReactApp</a></li>
                           <li><Link to="/">Home</Link></li>
                           <li><Link to="/image">Images</Link></li>
                           <li><Link to="/music">Music</Link></li>
                           <li><Link to="/contact">Contact Us</Link></li>
                           <li><Link to="/login">Login</Link></li>
                           <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                        <ul className="nav navbar-nav pull-right">
                            <li><a href="https://fr.linkedin.com/in/victor-landureau-299732105"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/Victor75Landureau"><i className="fa fa-github fa-2x"></i></a></li>
                        </ul>
                      </div>
                    </nav>
                </header>
        );
    }
}