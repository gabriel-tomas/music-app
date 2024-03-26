import * as types from '../types';

const initialState = {
  queueTracks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_QUEUE_TRACKS: {
      const newState = { ...state };
      newState.queueTracks = action.payload.queueTracks;
      console.log(newState);
      return newState;
    }

    case types.SHIFT_QUEUE_TRACKS: {
      const newState = { ...state };
      newState.queueTracks.shift();
      return newState;
    }

    default: {
      return state;
    }
  }
};
