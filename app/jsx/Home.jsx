import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import JumboMessage from './JumboMessage.jsx';
import JumboPage from './JumboPage.jsx';


export default class Home extends Component {
    render() {
        return (
            <div>
                <JumboMessage/>
                <JumboPage/>
            </div>
        );
    }
}