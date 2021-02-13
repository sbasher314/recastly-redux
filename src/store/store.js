import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var configureStore = function(initialState = {videoList: exampleVideoData, currentVideo: exampleVideoData[0]}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

const store = configureStore();

export default store;
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
