import * as types from '../types';

const initialState = {
  playerVolume: 0.3,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VOLUME: {
      const newState = { ...state };
      newState.playerVolume = action.payload;
      return newState;
    }

    default: {
      return state;
    }
  }
};
