import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class FooterBis extends Component {
    render() {
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="copyright">&copy; 2017 Victor Landureau</p>
                        <ul className="pull-right">
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
