import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import JumboMessage from './JumboMessage.jsx';
import JumboPage from './JumboPage.jsx';
import ImageGallery from 'react-image-gallery';
import ImageGalleryDataSet from '../js/ImageGalleryDataSet.js';


export default class Page1 extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    return (
      <ImageGallery
        items={ImageGalleryDataSet}
        slideInterval={4000}
        onImageLoad={this.handleImageLoad}/>
    );
  }
}