import * as types from '../types';

export function userUpdateRequest(payload) {
  return {
    type: types.USER_UPDATE_REQUEST,
    payload: payload,
  };
}

export const userUpdateSuccess = () => {
  return {
    type: types.USER_UPDATE_SUCCESS,
  };
};

export const userUpdateFail = () => {
  return {
    type: types.USER_UPDATE_FAIL,
  };
};
