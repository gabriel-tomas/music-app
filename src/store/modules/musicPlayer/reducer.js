import * as types from '../types';

const initialState = {
  musicPlaying: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PLAY_MUSIC: {
      const newState = { ...state };
      newState.musicPlaying = true;
      return newState;
    }

    case types.SET_STOP_MUSIC: {
      const newState = { ...state };
      newState.musicPlaying = false;
      return newState;
    }

    default: {
      return state;
    }
  }
};
