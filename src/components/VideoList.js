import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (/*{videos, handleVideoListEntryTitleClick}*/) => (
  <div className="video-list">
    {
      this.props.videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={this.props.handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
