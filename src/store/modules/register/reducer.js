import * as types from '../types';

const initialState = {
  loggedIn: null,
  errors: [],
  successMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.loggedIn = action.payload.loggedIn;
      newState.successMsg = action.payload.successMsg;
      return newState;
    }

    case types.REGISTER_FAIL: {
      const newState = { ...state };
      newState.loggedIn = action.payload.loggedIn;
      newState.errors = action.payload.errors;
      return newState;
    }

    default: {
      return state;
    }
  }
};
