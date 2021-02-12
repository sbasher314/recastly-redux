import Redux from 'redux';

var videoListReducer = (state = exampleVideoData, action) => {
  switch (action.type) {
    case 'VIDEO_LIST_CHANGE':
      return action.videos;
    default:
      return state;
  }
};

export default videoListReducer;
