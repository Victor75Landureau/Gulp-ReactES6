import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import About from './About.jsx';
import Match from './Match.jsx';
import { Router, Route, browserHistory, Link } from 'react-router';

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <Route path="about" component={About}/>
      <Route path="*" component={Match}/>
    </Route> 
</Router>
), document.getElementById('root'))
