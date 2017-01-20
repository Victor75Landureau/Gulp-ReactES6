import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class JumboMessage extends Component {
    render() {
        return (
            <div className="jumbotron">
              <div className="container">
                <h1>Hello, world!</h1>
                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                <img style={{padding:100}} src="app/images/hero_hardware_large.png" alt="Tablette"/>
              </div>
            </div>
        );
    }
}