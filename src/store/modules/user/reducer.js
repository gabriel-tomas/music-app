import * as types from '../types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_UPDATE_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.USER_UPDATE_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.USER_UPDATE_FAIL: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
