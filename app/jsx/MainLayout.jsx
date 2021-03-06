import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import Header from './Header.jsx';
import Footer from './FooterBis.jsx';


export default class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <main>
                  {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}

