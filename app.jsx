import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import { Router, Route, browserHistory, Link } from 'react-router';

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="page1" component={Page1}/>
      <Route path="page2" component={Page2}/>
    </Route>
</Router>
), document.getElementById('root'))
