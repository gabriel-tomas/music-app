import * as types from '../types';

import backendApi from '../../../services/backend';

const initialState = {
  token: '',
  user: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS: {
      const newState = { ...state };
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.AUTH_FAIL: {
      delete backendApi.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.AUTH_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};
