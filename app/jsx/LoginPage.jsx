import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
              <form className="form-signin">
              <h2 className="form-signin-heading">Identifiez-vous   <i className="fa fa-sign-in"></i></h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
        );
    }
}