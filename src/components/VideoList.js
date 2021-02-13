import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);



export default VideoList;
