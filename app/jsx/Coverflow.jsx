import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import AudioTrack from './AudioTrack.jsx';

var fn = function () {
  /* do you want */
}

export default class CoverFlow extends Component {
    render() {
        return (
         <Coverflow
            width={1280}
            height={500}
            enableScroll={false}
            displayQuantityOfSide={2}
            navigation={true}
            enableHeading={true}
         >
            <img src='app/images/album-1.jpeg' alt='Album1' data-action={fn} />
            <img src='app/images/album-2.jpeg' alt='Album2' />
            <img src='app/images/album-3.jpeg' alt='Album3' data-action={fn} />
            <img src='app/images/album-4.jpeg' alt='Album4' data-action={fn} />
            <img src='app/images/album-5.jpeg' alt='Album5' />
            <img src='app/images/album-6.jpeg' alt='Album6' />
            <img src='app/images/album-7.jpeg' alt='Album7' />
            <img src='app/images/album-8.png' alt='Album8' />
            <img src='app/images/album-9.jpeg' alt='Album9' />
            <img src='app/images/album-10.jpeg' alt='Album10' />
            <img src='app/images/album-11.jpeg' alt='Album11' />
            <img src='app/images/album-12.jpeg' alt='Album12' />
            <img src='app/images/album-13.jpeg' alt='Album13' />
            <img src='app/images/album-14.jpeg' alt='Album14' />
            <img src='app/images/album-15.jpeg' alt='Album15' />
            <img src='app/images/album-16.jpeg' alt='Album16' />
         </Coverflow>
        );
    }
}
