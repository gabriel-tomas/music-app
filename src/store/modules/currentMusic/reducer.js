import * as types from '../types';

const initialState = {
  currentPreviewMusic: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_MUSIC: {
      const newState = { ...state };
      newState.currentPreviewMusic = action.payload.previewUrl;
      return newState;
    }

    default: {
      return state;
    }
  }
};
