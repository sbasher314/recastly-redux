import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (props) => {
  return <VideoPlayer video={props.video}/>;
};

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);
