import React from 'react';
import { connect } from 'react-redux';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import handleVideoSearch from '../actions/search.js';

class App extends React.Component {

  componentDidMount() {
    this.props.handleVideoSearch('react tutorials');
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoSearch: (q) => dispatch(handleVideoSearch(q))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
