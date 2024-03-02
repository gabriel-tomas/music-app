import * as types from '../types';

const initialState = {
  isLogged: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLogged = true;
      return newState;
    }

    case types.CHECK_LOGIN_FAIL: {
      const newState = { ...state };
      newState.isLogged = false;
      return newState;
    }

    default: {
      return state;
    }
  }
};
