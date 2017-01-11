import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Footer extends Component {
    render() {
        return (
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </footer>
        );
    }
}
