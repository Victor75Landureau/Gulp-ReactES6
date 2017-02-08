import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class ImagePage extends React.Component {
    render() {
    return (
        <div className="container">
            <div><br/><br/><br/><br/></div>
            <div id="main_area">
                <div className="row">
                    <div className="col-sm-6" id="slider-thumbs">
                        <ul className="hide-bullets">
                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-0">
                                    <img src="app/images/album-1.jpeg"/>
                                </a>
                            </li>

                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-2"><img src="app/images/album-2.jpeg"/></a>
                            </li>
        
                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-3"><img src="app/images/album-3.jpeg"/></a>
                            </li>
        
                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-4"><img src="app/images/album-4.jpeg"/></a>
                            </li>
        
                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-5"><img src="app/images/album-5.jpeg"/></a>
                            </li>
                            <li className="col-sm-3">
                                <a className="thumbnail" id="carousel-selector-6"><img src="app/images/album-6.jpeg"/></a>
                            </li>
                            

                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-xs-12" id="slider">
                            <div className="row">
                                <div className="col-sm-12" id="carousel-bounding-box">
                                    <div className="carousel slide" id="myCarousel">
                                        <div className="carousel-inner">
                                            <div className="active item" data-slide-number="0">
                                                <img src="app/images/album-1.jpeg"/></div>

                                            <div className="item" data-slide-number="2">
                                                <img src="app/images/album-2.jpeg"/></div>
        
                                            <div className="item" data-slide-number="3">
                                                <img src="app/images/album-3.jpeg"/></div>
        
                                            <div className="item" data-slide-number="4">
                                                <img src="app/images/album-4.jpeg"/></div>
        
                                            <div className="item" data-slide-number="5">
                                                <img src="app/images/album-5.jpeg"/></div>
        
                                            <div className="item" data-slide-number="6">
                                                <img src="app/images/album-6.jpeg"/></div>
        
                                        </div>
                                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left"></span>
                                        </a>
                                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
    }
}


