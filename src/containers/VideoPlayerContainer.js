import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {
  return <VideoPlayer />;
};

const mapStateToProps = (state) => {
  return {
    'video': state.video
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);
