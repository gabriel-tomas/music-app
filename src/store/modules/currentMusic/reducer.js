import * as types from '../types';

const initialState = {
  currentPreviewMusic: '',
  currentTrackImg: '',
  currentTrackTitle: '',
  currentTrackArtists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_MUSIC: {
      const newState = { ...state };
      newState.currentPreviewMusic = action.payload.previewUrl;
      newState.currentTrackImg = action.payload.trackImg;
      newState.currentTrackTitle = action.payload.trackTitle;
      newState.currentTrackArtists = action.payload.trackArtists;
      return newState;
    }

    default: {
      return state;
    }
  }
};
