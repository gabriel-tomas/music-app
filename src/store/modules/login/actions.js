import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload: payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
}

export function loginFail(payload) {
  return {
    type: types.LOGIN_FAIL,
    payload: payload,
  };
}
