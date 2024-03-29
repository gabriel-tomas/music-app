import * as types from '../types';

const initialState = {
  infoShowed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INFO_SHOW: {
      const newState = { ...state };
      newState.infoShowed = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};
