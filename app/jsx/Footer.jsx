import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer" role="contentinfo">
                      <div className="container">
                        <p className="copyright">&copy; 2017 Martin Bean</p>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                                <li><a href="#"><i className="fa fa-github fa-2x"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                                <li><a href="https://www.google.fr"><i className="fa fa-google fa-2x"></i></a></li>
                            </ul>
                      </div>
            </footer>
        );
    }
}