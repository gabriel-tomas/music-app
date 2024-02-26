import * as types from '../types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_LOADING: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.SET_IS_NOT_LOADING: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
};
