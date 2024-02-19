import * as types from '../types';

const initialState = {
  currentState: 'none',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTUAL_MUSIC_STATE: {
      const newState = { ...state };
      newState.currentState = action.payload;
      console.log(newState);
      return newState;
    }

    default: {
      return state;
    }
  }
};
