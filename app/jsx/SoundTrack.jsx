import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import Sound from 'react-sound';
import playlist from '../js/playlist.js'

export default class SoundTrack extends Component {


    render() {
      return <Sound
        url="cool_sound.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying} />
        );
    }
}
