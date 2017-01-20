import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import ContactForm from './ContactForm.jsx';


export default class Contact extends Component {

  render() {
    return (
        <div>
            <ContactForm/>
        </div>
    );
  }
}