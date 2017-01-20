import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class SignUp extends Component {
    render() {
        return (
            <div>
              <form className="form-signin">
              <h2 className="form-signin-heading">Inscrivez-vous   <i className="fa fa-sign-in"></i></h2>

                <label for="inputName" className="sr-only">Name</label>
                <input type="name" id="inputName" className="form-control" placeholder="Enter your Name" required />

                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Enter your Email address" required autofocus />

                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Enter your Password" required />

                <label for="inputPassword" className="sr-only">Confirm Password</label>
                <input type="password2" id="inputPassword" className="form-control" placeholder="Confirm your Password" required />

                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
              </form>
            </div>
        );
    }
}