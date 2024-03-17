import * as types from '../types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_ACCOUNT_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.DELETE_ACCOUNT_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.DELETE_ACCOUNT_FAIL: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
