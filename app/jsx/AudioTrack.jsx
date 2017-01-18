import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-responsive-audio-player';
import Playlist from '../js/playlist.js'

export default class AudioTrack extends Component {

    render() {
        return (
            <AudioPlayer playlist={Playlist} autoplay={true} hideBackSkip={false} style={{ position: 'fixed', bottom: 0 }} />
        );
    }
}


