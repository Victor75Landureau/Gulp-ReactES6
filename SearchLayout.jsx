import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class SearchLayout extends Component {
    render() {
        return (
              <div className="search">
                <header className="search-header"></header>
                <div className="results">
                  {this.props.children}
                </div>
                <div className="search-footer pagination"></div>
              </div>
        );
    }
}
