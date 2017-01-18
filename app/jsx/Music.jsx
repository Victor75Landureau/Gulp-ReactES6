import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import Coverflow from './Coverflow.jsx';
import JumboMessage from './JumboMessage.jsx';

export default class Music extends Component {
    render() {
        return (
            <div className="app">
                <Coverflow/>
                <JumboMessage/>
            </div>
        );
    }
}

