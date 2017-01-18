import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

var fn = function () {
  /* do you want */
}

export default class Footer extends Component {
    render() {
        return (
         <Coverflow
            width={1280}
            height={450}
            displayQuantityOfSide={2}
            navigation={true}
            enableHeading={true}
         >
            <img src='app/images/album-1.png' alt='Album1' data-action={fn} />
            <img src='app/images/album-2.png' alt='Album2' data-action={fn} />
            <img src='app/images/album-3.png' alt='Album3' data-action={fn} />
            <img src='app/images/album-4.png' alt='Album4' data-action={fn} />
            <img src='app/images/album-5.png' alt='Album5' data-action="http://andyyou.github.io/react-coverflow/"/>
            <img src='app/images/album-6.png' alt='Album6' data-action="http://andyyou.github.io/react-coverflow/"/>
            <img src='app/images/album-7.png' alt='Album7' data-action="http://andyyou.github.io/react-coverflow/"/>
         </Coverflow>
        );
    }
}
