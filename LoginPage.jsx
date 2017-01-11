import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h2 className="page-header"> Account Login </h2>
                <form method="post" action="/users/login">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}